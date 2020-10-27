 <template>
  <Swiper class="main_Swiper">
    <SwiperItem v-for="item in TopImages" :key="item">
      <img :src="item" @load="SwiperLoad" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailsSwiper",
  props: {
    TopImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      LoadCount: 0,
    };
  },
  methods: {
    SwiperLoad() {
      this.LoadCount++;
      if (this.LoadCount == this.TopImages.length) {
        this.$emit("SwiperLoad");
      }
    },
  },
};
</script>

<style>
.main_Swiper {
  overflow: hidden;
  height: 300px;
}
</style>