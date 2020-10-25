<template>
  <div id="DetailsShop">
    <div class="ShopLogo">
      <img :src="shopInfo.shopLogo" alt />
      <span>{{shopInfo.name}}</span>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    setTimeout(() => {
      console.log(this.shopInfo);
    }, 2000);
  }
};
</script>

<style>
#DetailsShop{
    padding: 0 10px;
    margin-top: 5px;
    border-top: 2px solid #F6F6F5;
}
.ShopLogo img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
.ShopLogo span {
    font-size: 12px;
    color: #bbb;
}
</style>