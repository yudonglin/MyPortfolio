<template>
  <swiper
      :modules="modules"
      :pagination="{
      clickable: true,
    }"
      :slides-per-view="1"
      :spaceBetween="20"
      class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2
    </swiper-slide
    >
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4
    </swiper-slide
    >
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6
    </swiper-slide
    >
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8
    </swiper-slide
    >
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
  <!-- <div data-aos="fade-right" data-aos-delay="200" class="card"> -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
