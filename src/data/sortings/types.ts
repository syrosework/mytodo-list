export type Sorting = 'title' | 'titleReverse' | 'dateCreated' | 'dateModified'
export type SortingState = Sorting

// Actions types

export type ChangeSortingAction = {
  type: 'CHANGE_SORTING_ACTION'
  payload: Sorting
}
