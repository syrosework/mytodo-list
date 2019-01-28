import {
  CreateTodoAction,
  CreateTodoPayload,
  RemoveTodoAction,
  RemoveTodoPayload,
  UpdateTodoAction,
  UpdateTodoPayload
} from "./types"

export function createTodo(todo: CreateTodoPayload): CreateTodoAction {
  return {
    type: 'CREATE_TODO_ACTION',
    payload: todo,
  }
}

export function updateTodo(updatedProps: UpdateTodoPayload): UpdateTodoAction {
  return {
    type: 'UPDATE_TODO_ACTION',
    payload: updatedProps,
  }
}

export function removeTodo(todoIdToRemove: RemoveTodoPayload): RemoveTodoAction {
  return {
    type: 'REMOVE_TODO_ACTION',
    payload: todoIdToRemove
  }
}


