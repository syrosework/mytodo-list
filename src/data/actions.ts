type CreateTodoAction = {
  type: 'CREATE_TODO_ACTION'
  payload: CreateTodoPayload
}

type CreateTodoPayload = {
  id: number
  title: string
  dateCreated: Date
}

function createTodo(todo: CreateTodoPayload): CreateTodoAction {
  return {
    type: 'CREATE_TODO_ACTION',
    payload: {
      ...todo,
    }
  }
}

type UpdateTodoAction = {
  type: 'UPDATE_TODO_ACTION'
  payload: UpdateTodoPayload
}

type UpdateTodoPayload = {
  title?: string
  isDone?: boolean
}

function updateTodo(updatedProps: UpdateTodoPayload): UpdateTodoAction {
  return {
    type: 'UPDATE_TODO_ACTION',
    payload: {
      ...updatedProps,
    }
  }
}

type RemoveTodoAction = {
  type: 'REMOVE_TODO_ACTION'
  payload: RemoveTodoPayload
}

type RemoveTodoPayload = {
  id: number
}

function removeTodo(todoIdToRemove: RemoveTodoPayload): RemoveTodoAction {
  return {
    type: 'REMOVE_TODO_ACTION',
    payload: todoIdToRemove
  }
}


