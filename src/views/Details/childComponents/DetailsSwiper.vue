 <template>
  <Swiper class="main_Swiper">
    <SwiperItem v-for="item in TopImages" :key="item">
      <img :src="item" alt />
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
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.main_Swiper {
  overflow: hidden;
  height: 300px;
}
</style>