import { Cycle } from './reducer'

export enum ActionsTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLES_AS_FINISHED = 'MARK_CURRENT_CYCLES_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return { type: ActionsTypes.INTERRUPT_CURRENT_CYCLE }
}

export function markCurrentCyclesAsFinishedAction() {
  return { type: ActionsTypes.MARK_CURRENT_CYCLES_AS_FINISHED }
}
