import {StateLoader} from "./state-loader/types"
import {State} from "./types"

function initializeDefaultState(): State {
  return {
    todos: {
      byId: {},
      ids: [],
      todoNextId: 0,
    },
    sorting: 'dateModified',
  }
}