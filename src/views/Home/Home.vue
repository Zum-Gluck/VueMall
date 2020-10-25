<template>
  <div id="home">
    <NavBar class="Home-center">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl
      class="tab-control"
      :titles="['新款', '流行', '促销']"
      @currentControlClick="currentControlClick"
      ref="tabcontrol"
      v-show=" isShowTabControl"
    ></TabControl>
    <div class="wrapper">
      <Scroll class="content" @pullingLoad="pullingLoad" ref="Scroll" @backtopBlock="backtopBlock">
        <HomeSwiper :banners="banners" @imgLoaded="imgLoaded"></HomeSwiper>
        <HomeRecommend :recommends="recommends"></HomeRecommend>
        <FeatureView></FeatureView>
        <TabControl
          class="tab-control"
          :titles="['新款', '流行', '促销']"
          @currentControlClick="currentControlClick"
          ref="tabcontrol"
          v-show="!isShowTabControl"
        ></TabControl>
        <MainGoods :goodsList="goods[currentGoods].list" />
      </Scroll>
      <BackTop @click.native="BackTopClick" v-show="scrollPosition < -500" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";

import FeatureView from "./childComponents/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";
import MainGoods from "components/content/goods/MainGoods";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getGoodsMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    MainGoods,
    Scroll,
    BackTop
  },
  data() {
    return {
      //通过props 将数据传递给子组件
      banners: [],
      recommends: [],
      goods: {
        //定义商品列表
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoods: "pop",
      bs: null,
      scrollPosition: 0,
      TabControlOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });

    this.getGoodsMultidata("pop");
    this.getGoodsMultidata("new");
    this.getGoodsMultidata("sell");
  },
  deactivated() {
    this.saveY = this.$refs.Scroll.bs.y;
  },
  activated() {
    if (this.$refs.Scroll.bs) {
      this.$refs.Scroll.ScrollTo(0, this.saveY, 0);
    }
  },
  methods: {
    pullingLoad() {
      console.log("到达底部");
      this.getGoodsMultidata(this.currentGoods);
    },
    getGoodsMultidata(type) {
      /*
       * 网络请求相关代码
       */
      let page = this.goods[type].page + 1;
      getGoodsMultidata(type, page).then(res => {
        // page不正常
        // console.log(page);

        // 将请求过来的数据追加goods中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        setTimeout(() => {
          // this.$refs.Scroll.ScrollTo(0, 0);
          this.$refs.Scroll.bs.refresh();
          this.$refs.Scroll.bs.finishPullUp();
          // console.log(this);
        }, 500);

        //打印数据 正常
        // console.log(this.goods);
      });
    },
    currentControlClick(index) {
      setTimeout(() => {
        // this.$refs.ScrollTo;
        this.$refs.Scroll.bs.refresh();
      }, 800);
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
          break;
      }
    },
    BackTopClick() {
      this.$refs.Scroll.ScrollTo(0, 0);
    },
    backtopBlock(params) {
      this.scrollPosition = params;
      // console.log(this.TabControlOffsetTop);
      this.isShowTabControl = -params > this.TabControlOffsetTop;
      // console.log(this.TabControlOffsetTop);
      // console.log(this.scrollPosition);
    },
    imgLoaded() {
      this.TabControlOffsetTop = this.$refs.tabcontrol.$el.offsetTop - 44;
    }
  }
};
</script>

<style>
#home {
  height: 100vh;
}
.Home-center {
  text-align: center;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  background: #fff;
  z-index: 1;
}
.wrapper {
  height: 520px;
  overflow: hidden;
}
</style>