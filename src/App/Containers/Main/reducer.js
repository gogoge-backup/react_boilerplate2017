import { fromJS } from 'immutable'
import TYPES from './action-types'
import { incCount, decCount } from './action'

const initialState = fromJS({
  value: 1,
})


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.INC: 
      return state.set('value', state.get('value') + action.value)
    case TYPES.DEC: 
      return state.set('value', state.get('value') - action.value)
    case  'FETCH_POSTS_SUCCESS':
      console.warn(action.result)
      return state
    default:
      return state
  }
}
