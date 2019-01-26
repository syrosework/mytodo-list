import {TodosState} from "./todos/types"

export type State = {
  todos: TodosState
  sorting: Sorting // dateModified is default sorting
}

type Sorting = 'title' | 'titleReverse' | 'dateCreated' | 'dateModified'