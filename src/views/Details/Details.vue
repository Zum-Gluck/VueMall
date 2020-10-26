<template>
  <div id="Details">
    <DetailsNavBar id="DetailsNavBar"></DetailsNavBar>
    <Scroll class="content" ref="DetailsScroll">
      <DetailsSwiper :TopImages="TopImages"></DetailsSwiper>
      <DetailsGoodsInfo :goodsInfo="goodsInfo"></DetailsGoodsInfo>
      <DetailsShop :shopInfo="shopInfo"></DetailsShop>
      <DetailsPicture :goodsPicture="goodsPicture"></DetailsPicture>
      <DetailsComment :goodsParams="goodsParams" :goodsTable="goodsTable"></DetailsComment>
    </Scroll>
  </div>
</template>

<script>
import DetailsNavBar from "./childComponents/DetailsNavBar";
import DetailsSwiper from "./childComponents/DetailsSwiper";
import DetailsGoodsInfo from "./childComponents/DetailsGoodsInfo";
import DetailsShop from "./childComponents/DetailsShop";
import DetailsPicture from "./childComponents/DetailsPicture";
import DetailsComment from "./childComponents/DetailsComment";

import Scroll from "components/common/scroll/Scroll";
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
        services: [],
      },
      shopInfo: {},
      goodsPicture: [],
      goodsParams: [],
      goodsTable:[]
    };
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsGoodsInfo,
    DetailsShop,
    Scroll,
    DetailsPicture,
    DetailsComment,
  },
  created() {
    /*
     *  网络请求相关的代码
     */
    GetDetasMultidata(this.$route.params.iid).then((res) => {
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
       * 店铺数据
       */
      this.shopInfo = new shopInfo(res.result.shopInfo);

      /*
       * 商品图片
       */
      this.goodsPicture = res.result.detailInfo.detailImage[0].list;

      /**
       * 商品参数
       */
      this.goodsParams = res.result.itemParams.info.set;
      this.goodsTable = res.result.itemParams.rule.tables[0];







      setTimeout(() => {
        this.$refs.DetailsScroll.bs.refresh();
      }, 2000);
    });
  },
};
</script>

<style scoped>
#Details {
  position: relative;
  z-index: 99;
  background-color: #fff;
  overflow-y: hidden;
}
.content {
  height: 523px;
}
#DetailsNavBar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>