<template>
  <NavbarVue v-if="this.$route.name !== 'Invoice'" />
  
  <router-view/>

  <footer-vue v-if="this.$route.name !== 'Invoice'"></footer-vue>
  <div id="preloader-active">
      <div class="preloader d-flex align-items-center justify-content-center">
          <div class="preloader-inner position-relative">
              <div class="text-center">
                    <lottie-player src="https://lottie.host/d5692eb2-8ac8-4e9b-ae2d-516df821378d/0qdTCNENFg.json" 
                                   background="transparent" speed="1" style="width: 100px; height: 100px;" loop 
                                   autoplay>
                    </lottie-player>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import FooterVue from './components/Footer.vue';
import NavbarVue from './components/Navbar.vue';
export default{
    name: 'App',
    components: {
        FooterVue,
        NavbarVue,
    }
}
</script>

<style>

</style>
