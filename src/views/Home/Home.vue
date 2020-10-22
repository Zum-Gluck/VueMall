<template>
  <div id="home">
    <NavBar class="Home-center"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommends="recommends"></HomeRecommend>
    <FeatureView></FeatureView>
    <TabControl :titles="['新款','流行','促销']"></TabControl>
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
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
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
    TabControl,
  },
  data() {
    return {
      //通过props 将数据传递给子组件
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.Home-center {
  text-align: center;
  background-color: var(--color-tint);
  color: #fff;
}
</style>