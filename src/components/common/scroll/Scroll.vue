<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  name: "Scroll",
  data() {
    return {
      bs: null,
    };
  },
  mounted() {
    console.log(this.$refs.wrapper);
    setTimeout(() => {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        click:true, 
      });

      this.bs.on("pullingUp", () => {
        // this.bs.refresh();
        this.$emit("pullingLoad");
        // this.bs.finishPullUp();
      });
    }, 600);
  },
};
</script>

<style>
</style>