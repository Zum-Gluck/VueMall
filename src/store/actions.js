import {
  ADD_CARTLIST,
  ADDCOUNT
} from './mutations-types'

export default {
  addCartLists(content, payload) { // 在actions中判断执行哪个提交
    let oldProduct = content.state.cartList.find(item => item.iid == payload.iid)
    if (oldProduct) {
      content.commit(ADDCOUNT, oldProduct)
    } else {
      console.log(1);
      content.commit(ADD_CARTLIST, payload)
    }
  }
}