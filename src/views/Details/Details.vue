<template>
  <div id="Details">
    <DetailsNavBar id="DetailsNavBar" :CurrentNavBar="CurrentNavBar"></DetailsNavBar>
    <Scroll class="content" ref="Scroll" @backtopBlock="backtopBlock">
      <DetailsSwiper
        :TopImages="TopImages"
        @SwiperLoad="SwiperLoad"
      ></DetailsSwiper>
      <DetailsGoodsInfo :goodsInfo="goodsInfo"></DetailsGoodsInfo>
      <DetailsShop :shopInfo="shopInfo"></DetailsShop>
      <DetailsPicture
        :goodsPicture="goodsPicture"
        @PicLoad="PicLoad"
      ></DetailsPicture>
      <DetailsParams
        :goodsParams="goodsParams"
        :goodsTable="goodsTable"
      ></DetailsParams>
      <DetailsComment :goodsComment="goodsComment"></DetailsComment>
      <div class="goodsa">
        <GoodsItem
          v-for="(item, index) in goodsRecommend"
          :key="index"
          :goodsItem="item"
        ></GoodsItem>
      </div>
    </Scroll>
    <BackTop @click.native="BackTop" v-show="scrollPosition < -500"></BackTop>
  </div>
</template>

<script>
import DetailsNavBar from "./childComponents/DetailsNavBar";
import DetailsSwiper from "./childComponents/DetailsSwiper";
import DetailsGoodsInfo from "./childComponents/DetailsGoodsInfo";
import DetailsShop from "./childComponents/DetailsShop";
import DetailsPicture from "./childComponents/DetailsPicture";
import DetailsParams from "./childComponents/DetailsParams";
import DetailsComment from "./childComponents/DetailsComment";
import Scroll from "components/common/scroll/Scroll";
import GoodsItem from "../../components/content/goods/GoodsItem";
import BackTop from "../../components/content/backtop/BackTop";

// 的网络请求
import { GetDetasMultidata, shopInfo, GetRecommend } from "network/details";

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
      goodsTable: [],
      goodsComment: {},
      goodsRecommend: [],
      scrollPosition: 0,
      CurrentNavBar: 0,
    };
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsGoodsInfo,
    DetailsShop,
    Scroll,
    DetailsPicture,
    DetailsParams,
    DetailsComment,
    GoodsItem,
    BackTop,
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

      /***
       * 商品评论
       */
      this.goodsComment = res.result.rate.list[0];
    });

    GetRecommend().then((result) => {
      this.goodsRecommend = result.data.list;
    });
  },
  methods: {
    PicLoad() {
      this.$refs.Scroll.bs && this.$refs.Scroll.bs.refresh();
    },
    SwiperLoad() {
      this.$refs.Scroll.bs && this.$refs.Scroll.bs.refresh();
    },
    BackTop() {
      console.log(11);
      this.$refs.Scroll.ScrollTo(0, 0);
    },
    backtopBlock(params) {
      console.log(params);
      if (params > 300) {
        this.CurrentNavBar = 3;
      }
      this.scrollPosition = params;
    },
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
.goodsa {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>