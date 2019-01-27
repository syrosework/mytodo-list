import AbstractStateLoader from "./abstract-state-loader"

export default class LocalStorageLoader<ST> extends AbstractStateLoader<ST> {

  loadState(initialStateFallback: ST): ST {
    try {
      const serializedState = localStorage.getItem(this.stateId)
      if (serializedState === null) {
        return initialStateFallback
      }
      return (JSON.parse(serializedState) as ST) // TODO: Add validation here
    } catch (e) {
      console.error(e)
      return initialStateFallback
    }
  }

  saveState(currentState: ST): void {
    try {
      const serializedState = JSON.stringify(currentState)
      localStorage.setItem(this.stateId, serializedState)
    } catch (e) {
      console.error(e)
    }
  }
}