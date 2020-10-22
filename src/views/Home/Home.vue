<template>
  <div id="home">
    <NavBar class="Home-center">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommends="recommends"></HomeRecommend>
    <FeatureView></FeatureView>
    <TabControl class="tab-control" :titles="['新款', '流行', '促销']"></TabControl>
    <ul>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getGoodsMultidata } from "network/home";
import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";
import FeatureView from "./childComponents/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl
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
      }
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });

    this.getGoodsMultidata("pop");
    this.getGoodsMultidata("pop");
    this.getGoodsMultidata("pop");
  },
  methods: {
    getGoodsMultidata(type) {
      let page = this.goods[type].page + 1;
      getGoodsMultidata(type, page).then(res => {
        // page不正常
        console.log(page);

        // 将请求过来的数据追加goods中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //打印数据 正常
        console.log(this.goods);
      });
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
}
</style>