<template>
  <div id="DetalisBottom">
    <ul>
      <li class="Bottom_item_left">
        <a href="#">
          <div class="jlt"></div>
          <div>收藏</div>
        </a>
      </li>
      <li class="Bottom_item_left">
        <a href="">
          <div class="jlt2"></div>
          <div>客服</div>
        </a>
      </li>
      <li class="Bottom_item_left">
        <a href=""
          ><div class="jlt3"></div>
          <div>店铺</div>
        </a>
      </li>
      <li class="Bottom_item_right" @click="joinShopCar"> 
        <a href="#">加入购物车</a>
      </li>
      <li class="Bottom_item_right">
        <a href="#">立即购买</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailsBottom",
  methods:{
    joinShopCar(){
      this.$emit("joinShopCar")
    }
  }
};
</script>

<style scoped>
#DetalisBottom {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
#DetalisBottom > ul {
  display: flex;
  height: 100%;
}

#DetalisBottom > ul a {
  display: block;
  height: 100%;
  width: 100%;
}
.Bottom_item_left {
  width: 15%;
}
.Bottom_item_left a {
  padding-top: 7px;
  text-align: center;
  font-size: 12px;
}
.Bottom_item_left a img {
  width: 44px;
  height: 44px;
  background-position: -0px -0px;
}
.jlt,
.jlt2,
.jlt3 {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(~assets/img/detail/detail_bottom.png);
  background-size: 22px 150px;
}
.jlt {
  background-position: 0 0;
}
.jlt2 {
  background-position: 0 -52px;
}
.jlt3 {
  background-position: 0 -98px;
}
.Bottom_item_right {
  width: 28%;
  line-height: 50px;
  font-size: 15px;
  text-align: center;
}
#DetalisBottom li:nth-child(4) a {
  color: #fff;
  background-color: #ff9500;
}
#DetalisBottom li:nth-child(5) a {
  color: #fff;
  background-color: #ff0036;
}
</style>