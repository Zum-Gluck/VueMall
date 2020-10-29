<template>
  <div id="shopCar">
    <!-- 顶部导航 -->
    <NavBar class="nav-bg">
      <div slot="center">购物车({{ getCartListLength }})</div>
    </NavBar>

    <!-- 商品列表 -->
    <CarGoodsItem></CarGoodsItem>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CarGoodsItem from "./childCopmonents/CarGoodsItem";

import { mapGetters } from "vuex";

export default {
  name: "ShopCar",
  components: {
    NavBar,
    CarGoodsItem,
  },
  computed: {
    ...mapGetters(["getCartListLength"]),
  },
};
</script>

<style scoped>
#shopCar {
  height: 100vh;
}
.nav-bg {
  color: #fff;
  background-color: var(--color-tint);
}
</style>