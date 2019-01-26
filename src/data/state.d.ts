type State = {
  todos: {
    [id: string]: Todo
  }
  todoNextId: number
  sorting: Sorting // dateModified is default sorting
}

type Sorting = 'title' | 'titleReverse' | 'dateCreated' | 'dateModified'

type Todo = {
  id: number
  title: string
  dateCreated: Date
  dateModified: Date
  isDone: boolean
}