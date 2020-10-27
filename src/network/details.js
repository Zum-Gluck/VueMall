import { request } from './request'

export function GetDetasMultidata(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function GetRecommend() {
  return request({
    url: '/recommend',
  })
}
export class shopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
} 