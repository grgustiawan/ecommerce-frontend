<template>
    <section class="home-slider position-relative mb-10" style="margin-top: -20px;">
        <div class="container" style="padding: 0;">
            <Carousel :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in banner" :key="slide">
                    <div style="width: 100%;
                                margin-top: 20px;
                                align-items: center">
                    <img style="width: 100%;object-fit: contain;" :src="getBannerImg(slide.image)">
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  name: 'TopBannerVue',
  components:{
    Carousel,
    Slide,
    Pagination,
  },
  data(){
    return {
      banner: [
        {image: 'acuvue60.jpg'},
        {image: 'dermatix.jpeg'},
        {image: 'lifebuoy.jpg'},
        {image: 'blackmores.jpg'},
        {image: 'dove.jpg'},
        {image: 'woods-peppermint.jpg'},
        {image: 'ponds.jpg'},
      ],
      test: '',
    }
  },
  methods: {
    getBannerImg(filename){
        return '/assets/images/banner/' + filename;
    },
  }
}
</script>

<style>

</style>