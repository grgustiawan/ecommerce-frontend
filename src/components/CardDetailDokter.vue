<template>
  <div class="modal-container">
    <div class="overlay"></div>
    <div class="alert-dialog shake-r">
      <img
        :src="image"
        class="img-fluid rounded"
        style="height: 200px"
        alt="..." />
      <div style="position: relative; width: 100%; display: flex; height: 100%">
        <div class="container m-3">
          <h6 style="font-weight: bold; color: #000; font-size: 20px">
            {{ name }}
          </h6>
          <span
            >{{ ket }}
            <span
              style="
                color: #000;
                background-color: #f3f3f3;
                padding: 2px 10px;
                font-size: 12px;
              "
              ><i class="fa fa-briefcase"></i> {{ tahun }} Tahun</span
            ></span
          >
          <div class="d-flex" style="margin-top: 20px">
            <h6>
              <i class="fas fa-user-graduate" style="font-size: 24px"></i>
            </h6>
            <h6 style="margin-left: 14px">
              Alumnus <br />
              <span style="font-size: 12px; color: #7e7e77">{{ alumnus }}</span>
            </h6>
          </div>

          <div class="d-flex" style="margin-top: 20px">
            <h6>
              <i class="fas fa-map-marked-alt" style="font-size: 24px"></i>
            </h6>
            <h6 style="margin-left: 14px">
              Practice in <br />
              <span style="font-size: 12px; color: #7e7e77">{{
                practice
              }}</span>
            </h6>
          </div>

          <div class="d-flex" style="margin-top: 20px">
            <h6>
              <i class="fas fa-id-card" style="font-size: 24px"></i>
            </h6>
            <h6 style="margin-left: 14px">
              STR Number <br />
              <span style="font-size: 12px; color: #7e7e77">{{ strNo }}</span>
            </h6>
          </div>
          <button class="btn-card" @click="closed">Kembali</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetailDokter",
  props: ["image", "name", "ket", "tahun", "alumnus", "practice", "strNo"],
  components: {},
  data() {
    return {};
  },
  methods: {
    closed() {
      this.$emit("onClosed", false);
    },
  },
};
</script>

<style scoped>
.shake-r {
  animation: shake-r 0.6s ease;
}

@keyframes shake-r {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(10px);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000008e;
}
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-dialog {
  position: relative;
  width: 90%;
  max-width: 400px;
  height: 85%;
  background: #fff;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.btn-card {
  margin-top: 20px;
  box-sizing: border-box;
  text-align: center;
  border: 0;
  border-radius: 10px;
  color: #fff;
  padding: 0.6em 10em;
  background: #b22a2e;
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}

.btn-card:hover {
  background-color: #000;
}
</style>
