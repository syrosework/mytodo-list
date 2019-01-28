import {combineReducers, createStore as createReduxStore, Store} from 'redux'
import {todosReducer} from "./todos/reducer"
import {GlobalState} from "./types"
import LocalStorageLoader from "../state-loader/local-storage-loader"
import {sortingReducer, TITLE_REVERSE_SORTING, TITLE_SORTING} from "./sortings/reducer"

function initializeStateFallback(): GlobalState {
  return {
    todos: {
      byId: {},
      ids: [],
      todoNextId: 0,
    },
    sorting: {
      currentSorting: TITLE_SORTING,
      sortings: [TITLE_SORTING, TITLE_REVERSE_SORTING]
    },
  }
}

export function createStore(): Store<GlobalState> {

  const stateLoader = new LocalStorageLoader<GlobalState>('my-todo')
  const loadedState = stateLoader.loadState(initializeStateFallback())

  const store = createReduxStore(
    combineReducers({
      todos: todosReducer(loadedState.todos),
      sorting: sortingReducer(loadedState.sorting),
    }),
    loadedState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  )

  store.subscribe(() => {
    stateLoader.saveState(store.getState())
  })

  return store
}