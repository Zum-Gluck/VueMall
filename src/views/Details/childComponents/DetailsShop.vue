<template>
  <div id="DetailsShop">
    <div class="ShopLogo">
      <div class="shop">
        <img :src="shopInfo.shopLogo" alt />
      </div>
      <span>{{ shopInfo.name }}</span>
      <div class="funs">
        <div class="funs_left">
          <div class="funs_item">
            <div>5.2万</div>
            <div>总销量</div>
          </div>
          <div class="funs_item">
            <div>202</div>
            <div>全部宝贝</div>
          </div>
        </div>
        <div class="funs_right">
          <div v-for="(item, index) in shopInfo.score" :key="index">
            {{ item.name }}
            <div class="score">
              {{ item.score }}
            </div>
            <span :class="{ good: item.isBetter, bad: !item.isBetter }">{{
              item.isBetter ? "高" : "低"
            }}</span>
          </div>
        </div>
      </div>
      <div class="inShop">
        <a href="">进店逛逛</a>
      </div>
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
      },
    },
  },
};
</script>

<style>
#DetailsShop {
  padding: 0 10px;
  margin-top: 5px;
  border-top: 2px solid #f6f6f5;
  z-index: 10;
}
.shop {
  display: inline-block;
  width: 45px;
  height: 45px;
  border: 1px solid #ccc;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 50%;
  margin: 5px 10px 0 0;
}
.ShopLogo img {
  width: 100%;
  height: 100%;
}
.ShopLogo span {
  font-size: 12px;
  color: #bbb;
}
.funs {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
}
.funs_left {
  display: flex;
  justify-content: center;
}
.funs_item {
  text-align: center;
  margin-right: 10px;
}
.funs_item div {
  margin-top: 10px;
  font-size: 14px;
}
.funs_right > div {
  margin-bottom: 10px;
  font-size: 13px;
}
.funs_right div:nth-child(3) {
  margin-bottom: 0;
}
.good {
  background-color: var(--color-tint);
  color: #000;
}
.bad {
  background-color: green;
}
.score {
  display: inline-block;
  width: 30px;
}
.inShop {
  width: 100%;
  margin-top: 10px;
  text-align: center;
}
.inShop a {
  display: inline-block;
  width: 120px;
  height: 25px;
  line-height: 25px;
  background-color: #f1f5fb;
  font-size: 13px;
  color: #bbb;
  border-radius: 12px;
}
</style>