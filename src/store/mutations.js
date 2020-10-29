import {
  ADD_CARTLIST,
  ADDCOUNT
} from './mutations-types'

export default {
  [ADD_CARTLIST](state, payload) {
    payload.count = 1
    state.cartList.push(payload)
  },
  [ADDCOUNT](state, payload) {
    payload.count += 1
  }
}