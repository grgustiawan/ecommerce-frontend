<template>
    <section class="home-banner position-relative mb-10">
        <img src="/assets/images/store/store1.jpg" class="home-banner-img" alt="banner">
        <div class="glasses"></div>
        <!-- <div class="home-welcome-text">
            <h3>Welcome To Apotik Melawai</h3>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            <button>Please Login To Continue</button>
        </div> -->
    </section>
</template>

<script>
export default {
  name: 'HomeBannerVue',
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
.home-banner{
    width: 100svw;
    height: 600px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
}

.home-banner-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 30%;
    filter: saturate(2) contrast(150%);
}

.glasses{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    z-index: 10;
}

.home-welcome-text{
    width: 50%;
    max-width: 600px;
    position: absolute;
    left: 10%;   
    z-index: 100; 
    display: flex;
    flex-direction: column;
}
</style>