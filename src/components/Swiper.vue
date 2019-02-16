<template>
  <swiper :style="'height: ' + placeholderHeight + 'px'" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <a class="js-no-follow" :href='slide.hrefUrl'>
        <img class="goods-main-photo fadeIn" :src='slide.imgUrl'>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'index-swiper',
    components: { swiper, swiperSlide },
    props: {
      slides: Array,
      placeholderHeight: Number,
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: true,
          loop: true,
        },
      }
    },
  }
</script>

<style>
  .swiper-slide img {
    width: 100%;
  }
</style>