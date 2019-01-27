export default abstract class AbstractStateLoader<ST> {

  protected stateId: string

  constructor(stateId: string) {
    this.stateId = stateId
  }

  abstract loadState(initialStateFallback: ST): ST

  abstract saveState(currentState: ST): void
}

