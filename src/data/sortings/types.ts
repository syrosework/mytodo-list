export type Sorting = {
  value: 'title' | 'titleReverse'
  label: string
}
export type SortingState = {
  currentSorting: Sorting,
  sortings: Sorting[]
}

// Actions types

export type ChangeSortingAction = {
  type: 'CHANGE_SORTING_ACTION'
  payload: ChangeSortingPayload
}

export type ChangeSortingPayload = Sorting