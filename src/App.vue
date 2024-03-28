<template>
  <NavbarVue v-if="this.$route.name !== 'Invoice'" />
  
  <router-view/>

  <footer-vue v-if="this.$route.name !== 'Invoice'"></footer-vue>
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
