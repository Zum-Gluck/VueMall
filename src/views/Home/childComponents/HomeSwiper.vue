<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.value">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoaded" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isloaded: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoaded() {
      if (!this.isloaded) {
        this.$emit("imgLoaded");
        this.isloaded = true;
      }
    }
  }
};
</script>

<style>
</style>