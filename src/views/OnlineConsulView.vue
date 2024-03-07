<template>
  <main class="main pages">
    <div class="bg-consul">
      <div class="page-content pt-50">
        <div class="container">
          <h4 class="judul-consul">
            Fast and Precise Service!<br />Take Online Doctor Consultation
          </h4>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OnlineConsulView",
};
</script>

<style scoped>
.bg-consul {
  background-image: url("../assets/imgs/banner/bg-consul.jpg");
  width: 100%;
  height: 60vh;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
.judul-consul {
  color: #000;
  font-size: 20pt;
  font-weight: 700;
  font-family: Verdana, sans-serif;
  margin-left: 25px;
  line-height: 1.3em;
}
</style>
