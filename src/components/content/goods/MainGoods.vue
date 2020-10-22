<template>
  <div class="goods">
    <GoodsItem v-for="(item,index) in goodsList" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "MainGoods",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsItem
  }
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>