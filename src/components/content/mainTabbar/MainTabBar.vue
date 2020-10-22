<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="blue">
      <img src="~assets/img/home.png" slot="itemImg" />
      <img src="~assets/img/home_active.png" slot="itemImg_active" />
      <div slot="itemFont">首页</div>
    </TabBarItem>
    <TabBarItem path="/classify" activeColor="yellow">
      <img src="~assets/img/classify.png" slot="itemImg" />
      <img src="~assets/img/classify_active.png" slot="itemImg_active" />
      <div slot="itemFont">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcar" activeColor="blue">
      <img src="~assets/img/shopcar.png" slot="itemImg" />
      <img src="~assets/img/shopcar_active.png" slot="itemImg_active" />
      <div slot="itemFont">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="blue"> 
      <img src="~assets/img/profile.png" slot="itemImg" />
      <img src="~assets/img/profile_active.png" slot="itemImg_active" />
      <div slot="itemFont">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBar-item";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>