<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style>
.backtop {
  position: fixed;
  right: 8px;
  bottom: 48px;
  z-index: 99;
}
.backtop img {
  width: 42px;
  height: 42px;
}
</style>