<template>
  <div id="Details">
    <DetailsNavBar
      id="DetailsNavBar"
      @DetailsNavClick="DetailsNavClick"
      ref="detailNavBar"
    ></DetailsNavBar>
    <Scroll class="content" ref="Scroll" @backtopBlock="backtopBlock">
      <DetailsSwiper
        :TopImages="TopImages"
        @SwiperLoad="SwiperLoad"
        class="detail-set-scroll"
      ></DetailsSwiper>
      <DetailsGoodsInfo :goodsInfo="goodsInfo"></DetailsGoodsInfo>
      <DetailsShop :shopInfo="shopInfo"></DetailsShop>
      <DetailsPicture :goodsPicture="goodsPicture"></DetailsPicture>
      <DetailsParams
        :goodsParams="goodsParams"
        :goodsTable="goodsTable"
        class="detail-set-scroll"
      ></DetailsParams>
      <DetailsComment
        :goodsComment="goodsComment"
        class="detail-set-scroll"
      ></DetailsComment>
      <div class="goodsa detail-set-scroll">
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
import { debounce } from "commonTools/utils";

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
        detailIndex: 0,
      },
      shopInfo: {},
      goodsPicture: [],
      goodsParams: [],
      goodsTable: [],
      goodsComment: {},
      goodsRecommend: [],
      scrollPosition: 0,
      classList: [],
      newArr: [],
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
    SwiperLoad() {  // 轮播图加载完后 计算一次高度
      this.$refs.Scroll.bs && this.$refs.Scroll.bs.refresh();
    },
    BackTop() { 
      this.$refs.Scroll.ScrollTo(0, 0);
    },
    backtopBlock(params) {
      this.getClassList();
      for (let i = 0; i < this.classList.length - 1; i++) {  //用于判断当前出去哪个NavBar让相应的出去current状态
        if ( 
          -params > this.classList[i].offsetTop &&
          -params < this.classList[i + 1].offsetTop
        ) {
          if (this.detailIndex != i) {
            this.detailIndex = i;
            this.$refs.detailNavBar.currentIndex = this.detailIndex;
          }
        }
      }
      this.scrollPosition = params;
      // console.log(this.scrollPosition);
    },
    getClassList() { // 通过类名获取要操作的元素
      this.classList = [];
      this.classList = Array.from(
        document.getElementsByClassName("detail-set-scroll")
      );
      let maxValue = 10000000;  // 解决数组下标越界的问题 
      this.classList.push({ offsetTop: maxValue });
    },
    DetailsNavClick(index) {
      // 点击NavBar 滚动到对应位置
      this.getClassList();
      let el = document.getElementsByClassName("detail-set-scroll");
      this.$refs.Scroll.ScrollToElement(el[index], 300);  //通过子组件传递过来的payload判断滚动到哪个Element
    },
  },
  mounted() {
    this.$bus.$on( // 事件总线 监听图片加载 调用refresh方法重新计算页面高度
      "PicLoad",
      debounce(() => {
        if (this.$refs.Scroll.bs !== undefined) {
          this.$refs.Scroll.bs.refresh();
        }
      }, 500)
    );

  },
  destroyed() { // 离开页面时  取消事件监听  有bug未处理
    this.$bus.$off();
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