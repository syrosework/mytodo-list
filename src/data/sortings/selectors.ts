import {GlobalState} from "../types"
import {Sorting} from "./types"

export const selectCurrentSorting = (state: GlobalState): Sorting => state.sorting.currentSorting