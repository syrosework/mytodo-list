export type Todo = {
  id: number
  title: string
  dateCreated: Date
  dateModified: Date
  isDone: boolean
}

export type TodosState = {
  byId: {
    [id: number]: Todo
  }
  ids: number[]
  todoNextId: number
}

// Actions types

export type TodoAction = CreateTodoAction | UpdateTodoAction | RemoveTodoAction


export type CreateTodoAction = {
  type: 'CREATE_TODO_ACTION'
  payload: CreateTodoPayload
}

export type CreateTodoPayload = {
  id: number
  title: string
  dateCreated: Date
}


export type UpdateTodoAction = {
  type: 'UPDATE_TODO_ACTION'
  payload: UpdateTodoPayload
}

export type UpdateTodoPayload = {
  id: number
  dateModified: Date
  title?: string
  isDone?: boolean
}


export type RemoveTodoAction = {
  type: 'REMOVE_TODO_ACTION'
  payload: RemoveTodoPayload
}

export type RemoveTodoPayload = {
  id: number
}