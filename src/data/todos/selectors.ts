import {createSelector} from "reselect"
import {GlobalState} from "../types"
import {Todo, TodosState} from "./types"
import {selectCurrentSorting} from "../sortings/selectors"

const selectTodosState = (state: GlobalState): TodosState => state.todos

export const selectTodosAsArray = createSelector(
  selectTodosState,
  (todosState: TodosState): Todo[] => {
    return todosState.ids.map((id: number) => todosState.byId[id])
  })

export const selectTodosArraySorted = createSelector(
  selectTodosAsArray,
  selectCurrentSorting,
  (todos, currentSorting) => {
    const todosCopy = [...todos]
    switch (currentSorting.value) {
      case 'title':
        return todosCopy.sort((a, b) => {
          if (a.title > b.title) {
            return 1
          }
          if (a.title < b.title) {
            return -1
          }
          return 0
        })
      case 'titleReverse':
        return todosCopy.sort((a, b) => {
          if (a.title > b.title) {
            return -1
          }
          if (a.title < b.title) {
            return 1
          }
          return 0
        })
      default:
        return todosCopy
    }
  }
)