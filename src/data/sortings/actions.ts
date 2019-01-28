import {ChangeSortingAction, ChangeSortingPayload} from "./types"

export function changeSorting(newSorting: ChangeSortingPayload): ChangeSortingAction {
  return {
    type: 'CHANGE_SORTING_ACTION',
    payload: newSorting,
  }
}