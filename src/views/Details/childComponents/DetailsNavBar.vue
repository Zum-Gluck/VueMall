<template>
  <div>
    <NavBar>
      <div slot="left" class="left_img" @click="NavBack">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="NavBar-center">
        <div
          v-for="(item,index) of titles"
          :key="index"
          class="Nav-item"
          @click="itemClick(index)"
          :class="{'currentItem':index == currentIndex}"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailsNavBar",
  data() {
    return {
      titles: ["商品", "评论", "参数", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    NavBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.NavBar-center {
  display: flex;
  font-size: 15px;
  text-align: center;
}
.Nav-item {
  flex: 1;
}
.currentItem {
  color: var(--color-high-text);
}
.left_img img {
  margin: 12px 0 0 15px;
}
</style>