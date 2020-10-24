<template>
  <div id="home">
    <NavBar class="Home-center">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommends="recommends"></HomeRecommend>
    <FeatureView></FeatureView>
    <TabControl
      class="tab-control"
      :titles="['新款', '流行', '促销']"
      @contolEmitClick="contolEmitClick"
    ></TabControl>
    <MainGoods :goodsList="goods[currentControl].list" />
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



export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    MainGoods,
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
        sell: { page: 0, list: [] },
      },
      currentControl: "pop",
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoodsMultidata("pop");
    this.getGoodsMultidata("new");
    this.getGoodsMultidata("sell");
  },
  mounted() {
  
  },
  methods: {
    /*
     * 操作页面的方法
     */
    contolEmitClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentControl = "pop";
          break;
        case 1:
          this.currentControl = "new";
          break;
        case 2:
          this.currentControl = "sell";
          break;
      }
    },
    /*
     * 请求数据有关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoodsMultidata(type) {
      let page = this.goods[type].page + 1;
      getGoodsMultidata(type, page).then((res) => {
        // page不正常
        // console.log(page);

        // 将请求过来的数据追加goods中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //打印数据 正常
        // console.log(this.goods);
      });
    },
  },
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
</style>