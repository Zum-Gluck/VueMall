<template>
  <div id="GoodsInfo">
    <div class="title">{{title}}</div>
    <div class="price">
      <span>{{Price}}</span>
      <span>{{oldPrice}}</span>
      <span>优惠价</span>
    </div>
    <div class="columns">
      <div v-for="item of goodsInfo.columns" :key="item" class="columns-item">{{item}}</div>
    </div>
    <div class="Goods_icon">
      <div v-for="(item,index) in goodsInfo.services" :key="index" class="icon">
        <span>
          <img :src="item.icon" />
        </span>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    title() {
      return this.goodsInfo.title;
    },
    Price() {
      return this.goodsInfo.price;
    },
    oldPrice() {
      return this.goodsInfo.oldPrice;
    }
  }
};
</script>

<style>
#GoodsInfo {
  margin-top: 10px;
  padding: 0 5px;
}
.title {
  font: 800 15px/1.5 "MicrosoftYaHei";
}
.price {
  margin-top: 5px;
}
.price span:nth-child(1) {
  font: 22px "MicrosoftYaHei";
  color: var(--color-tint);
}

.price span:nth-child(2) {
  display: inline-block;
  margin: 0 8px;
  text-decoration: line-through;
  font-size: 14px;
  color: #acacac;
}

.price span:nth-child(3) {
  width: 60px;
  display: inline-block;
  font-size: 17px;
  background-color: var(--color-tint);
  color: #fff;
  border-radius: 8px;
  text-align: center;
}
.columns {
  display: flex;
  margin-top: 20px;
  padding-bottom: 12px;
  justify-content: space-between;
  font-size: 13px;
  color: #b5b5b5;
  border-bottom: 0.5px solid #f1f1f1;
}
.Goods_icon {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.Goods_icon img {
  width: 10px;
  height: 10px;
}
.icon {
  font-size: 12px;
}
</style>