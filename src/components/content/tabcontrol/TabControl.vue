<template>
  <div id="tab-control">
    <div v-for="(item, index) in titles" :key="item" class="control-item">
      <div
        class="control-current"
        :class="{ current: cuerys === index }"
        @click="controlClick(index)"
      > 
        {{ item }}
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      cuerys: 0,
    };
  },
  methods: {
    controlClick(index) {
      this.cuerys = index;
    },
  },
};
</script>

<style>
#tab-control {
  display: flex;
  height: 40px;
  font-size: 14px;
}
.control-item {
  flex: 1;
  line-height: 30px;
  height: 30px;
  text-align: center;
}
.control-current {
  display: inline-block;
  text-align: center;
  width: 36px;
  height: 28px;
}
.current {
  color: var(--color-tint);
  border-bottom: 3px var(--color-tint) solid;
}
</style>