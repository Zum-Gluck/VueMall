<template>
  <div class="recommend">
    <li v-for="item in recommends" :key="item.value">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </li>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.recommend img {
  width: 70px;
  height: 70px;
}
.recommend li {
  flex: 1;
  font-size: 12px;
  text-align: center;
}
</style>