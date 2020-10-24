<template>
  <div id="home">
    <NavBar class="Home-center">
      <div slot="center">购物街</div>
    </NavBar>
    <div class="wrapper" ref="boxs">
      <div class="content">
        <HomeSwiper :banners="banners"></HomeSwiper>
        <HomeRecommend :recommends="recommends"></HomeRecommend>
        <FeatureView></FeatureView>
        <TabControl
          class="tab-control"
          :titles="['新款', '流行', '促销']"
          @currentControlClick="currentControlClick"
        ></TabControl>
        <MainGoods :goodsList="goods[currentGoods].list" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";

import FeatureView from "./childComponents/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";
import MainGoods from "components/content/goods/MainGoods";

import { getHomeMultidata, getGoodsMultidata } from "network/home";

//Bscroll 安装
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    MainGoods
  },
  data() {
    return {
      //通过props 将数据传递给子组件
      banners: [],
      recommends: [],
      goods: {
        //定义商品列表
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoods: "pop",
      bs: null
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });

    this.getGoodsMultidata("pop");
    this.getGoodsMultidata("new");
    this.getGoodsMultidata("sell");
  },
  mounted() {
    /*
     * 滚动相关的代码
     */
    setTimeout(() => {
      this.bs = new BScroll(this.$refs.boxs, {
        probeType: 3,
        pullUpLoad: true,
        click: true
      });
      this.bs.on("pullingUp", () => {
        this.getGoodsMultidata(this.currentGoods); 
        console.log("--");
        // 回调钩子 告诉框架已经准备好了下一次回调上拉加载更多
        // 普通function中this指向 BScroll 的实例   箭头函数的this 指向Vue实例
        this.bs.refresh();

        setTimeout(() => {
          this.bs.finishPullUp();
        }, 1000);
      });
    }, 200);
  },
  methods: {
    getGoodsMultidata(type) {
      /*
       * 网络请求相关代码
       */
      let page = this.goods[type].page + 1;
      getGoodsMultidata(type, page).then(res => {
        // page不正常
        // console.log(page);

        // 将请求过来的数据追加goods中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //打印数据 正常
        // console.log(this.goods);
      });
    },
    currentControlClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
          break;
      }
      console.log(this.currentGoods);
    }
  }
};
</script>

<style>
.Home-center {
  text-align: center;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 1;
}
.wrapper {
  height: 570px;
}
</style>