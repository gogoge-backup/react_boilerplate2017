import TYPES from './action-types'
import { fetchPosts } from './saga'

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

export const fetch = () => {
  return {
    type: 'SAGA_FETCH',
    task: fetchPosts,
  }
}