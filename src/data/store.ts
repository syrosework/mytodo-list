import {combineReducers, createStore as createReduxStore, Store} from 'redux'
import {todosReducer} from "./todos/reducer"
import {State} from "./types"


export function createStore(): Store<State> {
  return createReduxStore(
    combineReducers({
      todos: todosReducer,
    }),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  )
}