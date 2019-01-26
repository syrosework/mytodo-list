import {TodoAction, TodosState} from "./types"

function initializeState(): TodosState {
  return {
    byId: {},
    todoNextId: 0,
  }
}

export function todosReducer(state: TodosState = initializeState(), action: TodoAction): TodosState {
  switch (action.type) {
    case 'CREATE_TODO_ACTION': {
      const {id, dateCreated, title} = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            dateCreated,
            dateModified: dateCreated,
            isDone: false,
          }
        },
        todoNextId: id + 1,
      }
    }
    case 'UPDATE_TODO_ACTION': {
      const {id, dateModified, ...changedProps} = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            dateModified,
            ...changedProps,
          }
        },
      }
    }
    case 'REMOVE_TODO_ACTION': {
      const {id} = action.payload
      const todosByIdCopy = {...state.byId}
      delete todosByIdCopy[id]
      return {
        ...state,
        byId: todosByIdCopy,
      }
    }
    default:
      return state
  }
}