<template>
  <div id="DetailsPicture">
    <li v-for="(item, index) in goodsPicture" :key="index">
      <img :src="item" alt="" />
    </li>
  </div>
</template>

<script>
export default {
  name: "DetailsPicture",
  props: {
    goodsPicture: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
#DetailsPicture li img {
  width: 320px;
}
</style>