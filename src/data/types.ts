import {TodosState} from "./todos/types"
import {SortingState} from "./sortings/types"

export type State = {
  readonly todos: TodosState
  readonly sorting: SortingState // dateModified is default sorting
}