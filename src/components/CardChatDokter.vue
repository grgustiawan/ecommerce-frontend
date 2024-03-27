<template>
  <div class="modal-container">
    <div class="overlay"></div>
    <div class="alert-dialog shake-r">
      <div class="btn-close" style="z-index: 10" @click="closed"></div>

      <div
        style="
          position: relative;
          width: 100%;
          height: 50px;
          border-bottom: 2px solid #f3f3f3;
        ">
        <span class="alert-title">Form Detail Pasien</span>
      </div>
      <div
        style="
          position: relative;
          width: 100%;
          display: flex;
          height: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
        ">
        <div class="container m-3">
          <div class="row">
            <div class="mb-3">
              <label
                for="fullName"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Full Name <span class="text-danger">*Erorr</span></label
              >
              <input
                type="text"
                class="form-control"
                id="fullName"
                name="fullName"
                style="
                  height: 36px;
                  font-size: 12px;
                  color: #000;
                  border-radius: 10px;
                  margin-top: -8px;
                "
                required />
              <span class="text-secondary" style="font-size: 12px">
                (Ex: Jhon Doe)
              </span>
            </div>

            <div class="mb-3">
              <label
                for="phone"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Whatsapp/Phone Number
                <span class="text-danger">*Erorr</span></label
              >
              <input
                type="number"
                class="form-control"
                id="phone"
                name="phone"
                style="
                  height: 36px;
                  font-size: 12px;
                  color: #000;
                  border-radius: 10px;
                  margin-top: -8px;
                "
                required />
              <span class="text-secondary" style="font-size: 12px">
                (Ex: 6281310250688)
              </span>
            </div>

            <div class="mb-3">
              <label
                for="email"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Email <span class="text-danger">*Erorr</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                style="
                  height: 36px;
                  font-size: 12px;
                  color: #000;
                  border-radius: 10px;
                  margin-top: -8px;
                "
                required />
              <span class="text-secondary" style="font-size: 12px">
                (Ex: jhon.dhoe@example.com)
              </span>
            </div>

            <div class="mb-3">
              <label
                for="birthDay"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Date of birth <span class="text-danger">*Erorr</span></label
              >
              <input
                type="date"
                class="form-control"
                id="birthDay"
                name="birthDay"
                style="
                  height: 36px;
                  font-size: 12px;
                  color: #000;
                  border-radius: 10px;
                  margin-top: -8px;
                "
                required />
              <span class="text-secondary" style="font-size: 12px">
                (Ex: 30/12/1999)
              </span>
            </div>

            <div class="mb-3">
              <label
                for="weight"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Weight (kg)<span class="text-danger">*Erorr</span></label
              >
              <input
                type="number"
                class="form-control"
                id="weight"
                name="weight"
                style="
                  height: 36px;
                  font-size: 12px;
                  color: #000;
                  border-radius: 10px;
                  margin-top: -8px;
                "
                required />
              <span class="text-secondary" style="font-size: 12px">
                (Ex: 69)
              </span>
            </div>

            <div class="mb-3">
              <label
                for="height"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Height (cm)<span class="text-danger">*Erorr</span></label
              >
              <input
                type="number"
                class="form-control"
                id="height"
                name="height"
                style="
                  height: 36px;
                  font-size: 12px;
                  color: #000;
                  border-radius: 10px;
                  margin-top: -8px;
                "
                required />
              <span class="text-secondary" style="font-size: 12px">
                (Ex: 189)
              </span>
            </div>
            <div class="mb-3">
              <label
                for="radio"
                class="form-label"
                style="font-size: 13px; font-weight: bold; color: #313131"
                >Gender <span class="text-danger">*Erorr</span></label
              >
              <div class="d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1" />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style="color: #313131">
                    Man
                  </label>
                </div>
                <div class="form-check" style="padding-left: 40px">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault2"
                    style="color: #313131">
                    Women
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button class="btn-card" @click="submit">Submit</button>
          <div style="height: 20px; width: 100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardChatDokter",
  props: [],
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
.btn-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 12pt;
  cursor: pointer;
  transition: all 0.5s ease;
}

.btn-close:hover {
  font-size: 14pt;
}

.alert-title {
  position: relative;
  top: 15px;
  left: 20px;
  font-size: 14pt;
  font-family: Tahoma, sans-serif;
  color: #313131;
}

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
  max-width: 500px;
  height: 90%;
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
  padding: 0.6em 14em;
  background: #106d42;
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
