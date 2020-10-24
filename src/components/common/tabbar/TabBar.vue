<template>
  <div>
    <ul id="TabBar">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
@import "~assets/css/base.css";
#TabBar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  line-height: 49px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  z-index: 9;
}
</style>