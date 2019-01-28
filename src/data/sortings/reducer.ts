import {ChangeSortingAction, Sorting, SortingState} from "./types"

export const TITLE_SORTING: Sorting = {
  value: 'title',
  label: 'by Title \u2193',
}

export const TITLE_REVERSE_SORTING: Sorting = {
  value: 'titleReverse',
  label: 'by Title \u2191',
}

export function sortingReducer(initialState: SortingState) {
  return (state: SortingState = initialState, action: ChangeSortingAction): SortingState => {
    switch (action.type) {
      case 'CHANGE_SORTING_ACTION': {
        return {
          ...state,
          currentSorting: action.payload,
        }
      }
      default:
        return state
    }
  }
}