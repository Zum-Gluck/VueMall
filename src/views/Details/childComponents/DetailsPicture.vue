<template>
  <div id="DetailsPicture">
    <li v-for="(item, index) in goodsPicture" :key="index">
      <img :src="item" alt="" @load="PicLoad" />
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
  data() {
    return {};
  },
  methods: {
    PicLoad() {
      this.$bus.$emit("PicLoad");
    },
  },
};
</script>

<style>
#DetailsPicture li img {
  width: 320px;
}
</style>