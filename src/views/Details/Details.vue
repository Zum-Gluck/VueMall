<template>
  <div>
    <DetailsNavBar></DetailsNavBar>
    <DetailsSwiper :TopImages="TopImages"></DetailsSwiper>
    <DetailsGoodsInfo :goodsInfo="goodsInfo"></DetailsGoodsInfo>
    <DetailsShop :shopInfo="shopInfo"></DetailsShop>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import DetailsNavBar from "./childComponents/DetailsNavBar";
import DetailsSwiper from "./childComponents/DetailsSwiper";
import DetailsGoodsInfo from "./childComponents/DetailsGoodsInfo";
import DetailsShop from "./childComponents/DetailsShop";

// 的网络请求
import { GetDetasMultidata, shopInfo } from "network/details";

export default {
  name: "Details",
  data() {
    return {
      GoodsId: null,
      TopImages: [],
      goodsInfo: {
        title: "",
        price: "",
        oldPrice: "",
        columns: [],
        services: []
      },
      shopInfo: {}
    };
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsGoodsInfo,
    DetailsShop
  },
  created() {
    /*
     *  网络请求相关的代码
     */
    GetDetasMultidata(this.$route.params.iid).then(res => {
      console.log(res);

      /*
       *轮播图数据
       */
      this.TopImages = res.result.itemInfo.topImages;

      /*
       *商品数据
       */
      this.goodsInfo.title = res.result.itemInfo.title; //商品标题
      this.goodsInfo.price = res.result.itemInfo.price; //商品现在的价格
      this.goodsInfo.oldPrice = res.result.itemInfo.oldPrice; //商品下划线价格
      this.goodsInfo.columns = res.result.columns; //商品服务
      this.goodsInfo.services.push(...res.result.shopInfo.services); //七天无理由退货

      /*
       * 店铺信息
       */
      this.shopInfo = new shopInfo(res.result.shopInfo);
      // console.log(this.shopInfo);
    });
  }
};
</script>

<style>
</style>