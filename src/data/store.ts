import {combineReducers, createStore as createReduxStore, Store} from 'redux'
import {todosReducer} from "./todos/reducer"
import {State} from "./types"
import LocalStorageLoader from "./state-loader/local-storage-loader"
import {sortingReducer} from "./sortings/reducer"

function initializeStateFallback(): State {
  return {
    todos: {
      byId: {},
      ids: [],
      todoNextId: 0,
    },
    sorting: 'dateModified',
  }
}

export function createStore(): Store<State> {

  const stateLoader = new LocalStorageLoader<State>('my-todo')
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