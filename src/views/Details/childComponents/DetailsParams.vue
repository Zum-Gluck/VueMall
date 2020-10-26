<template>
  <div>
    <table class="ParamsTable">
      <tr v-for="(item, index) in goodsTable" :key="index">
        <td v-for="(Citem, Cindex) in item" :key="Cindex">{{ Citem }}</td>
      </tr>
    </table>
    <table class="Params">
      <tr v-for="(item, index) in goodsParams" :key="index">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr> 
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailsParams",
  props: {
    goodsParams: {
      type: Array,
      default() {
        return [];
      },
    },
    goodsTable: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  };
</script>

<style>
.ParamsTable {
  padding: 0 10px 0;
}
.ParamsTable tr {
  width: 280px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.ParamsTable td {
  width: 50px;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  text-align: center;
}
.ParamsTable td:last-child {
  padding-right: 20px;
  box-sizing: content-box;
}
.ParamsTable tr:last-child {
  border-bottom: 2px solid #ccc;
}

.Params {
  padding: 0 10px 0;
}
.Params tr {
  position: relative;
}
.Params td {
  width: 50px;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  text-align: center;
}
.Params tr td:last-child {
  text-align: left;
  width: 140px;
  padding-left: 10px;
  color: var(--color-tint);
}
.Params tr::after{
  position: absolute;
  left: 10px;
  display: block;
  content: '';
  width: 200px;
  height: 0.5px;
  background-color: #ccc;
}
</style>