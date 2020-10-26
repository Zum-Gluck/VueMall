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
      bs: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        click: true
      });
      this.bs.on("scroll", p => {
        this.$emit("backtopBlock", p.y);
      });
      this.bs.on("pullingUp", () => {
        this.bs.refresh();
        this.$emit("pullingLoad");
      });
    }, 600);
  },
  activated() {
  },
  methods: {
    ScrollTo(x, y, time = 500) {
      this.bs.scrollTo(x, y, time);
    }
  }
};
</script>

<style>
</style>