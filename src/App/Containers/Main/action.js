import TYPES from './action-types'
export const incCount = (value) => {
  return {
    type: TYPES.INC,
    value: value || 1,
  }
}

export const decCount = (value) => {
  return {
    type: TYPES.DEC,
    value: value || -1,
  }
}