import {combineReducers, createStore as createReduxStore, Store} from 'redux'
import {todosReducer} from "./todos/reducer"
import {State} from "./types"


export function createStore(): Store<State> {
  return createReduxStore(
    combineReducers({
      todos: todosReducer,
    })
  )
}