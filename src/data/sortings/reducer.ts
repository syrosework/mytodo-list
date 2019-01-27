import {ChangeSortingAction, SortingState} from "./types"

export function sortingReducer(initialState: SortingState) {
  return (state: SortingState = initialState, action: ChangeSortingAction): SortingState => {
    switch (action.type) {
      case 'CHANGE_SORTING_ACTION': {
        return action.payload
      }
      default:
        return state
    }
  }
}