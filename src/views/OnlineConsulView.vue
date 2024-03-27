<template>
  <main class="main pages mb-4">
    <div class="bg-consul">
      <div class="page-consul page-content pt-50">
        <div class="container">
          <h4 class="judul-consul">
            Fast and Precise Service!<br />Take Online Doctor Consultation
          </h4>
          <h6 class="sub-consul">The best private consultation in Indonesia</h6>
          <button type="button" class="btn-consul">Consult Now</button>
        </div>
      </div>
    </div>

    <div class="page-consul page-content pt-50">
      <h5 class="sub-consul2 mb-3">
        25+ Specialist and Health Support Services
      </h5>

      <carousel
        class="carousel"
        :items-to-show="itemShow"
        :wrap-around="true"
        :autoplay="2000">
        <slide v-for="slide in consult" :key="slide.id">
          <div class="card" style="width: 250px; height: 250px">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center">
              <img :src="slide.image" alt="consult-icon" class="rounded-full" />
              <p class="fw-bold" style="color: #000">{{ slide.name }}</p>
              <span class="btn-connow">Consult now ></span>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <div class="page-ask page-content pt-50">
      <div class="row">
        <div class="col-md-4">
          <div class="card" style="max-height: 570px; overflow-y: scroll">
            <div class="card-body">
              <h6 class="sub-consul2 mb-2">Doctors and Specialists</h6>
              <p style="line-height: 1em; font-size: 1em">
                Select the available doctor & Specialists according to your
                conditions
              </p>
              <div class="row">
                <div
                  class="ask-main col-md-3"
                  style="margin-top: 20px"
                  v-for="sp in spesial"
                  :key="sp.id">
                  <img
                    :src="sp.image"
                    class="img-fluid rounded-circle"
                    style="width: 80px; height: 80px; object-fit: cover"
                    alt="..." />
                  <p style="color: #000; font-size: 12px; text-align: center">
                    {{ sp.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card" style="max-height: 570px; overflow-y: scroll">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4" v-for="dok in dokter" :key="dok.id">
                  <div class="card" style="height: 135px; margin-top: 20px">
                    <div class="card-body">
                      <div class="d-flex">
                        <img
                          :src="dok.image"
                          class="img-fluid rounded-circle"
                          style="width: 80px; height: 80px; object-fit: cover"
                          alt=".." />
                        <div class="row ml-5">
                          <p
                            class="fw-bold"
                            style="color: #000; font-size: 12px">
                            {{ dok.name }} <br />
                            <span class="text-secondary">{{ dok.ket }}</span>
                          </p>
                          <div class="d-flex">
                            <div
                              class="btn-detail"
                              @click="showCardDetail(dok)">
                              Detail
                            </div>
                            <div class="btn-chat" @click="showCardChat()">
                              Chat
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <DealsOfDay></DealsOfDay>
  <CardDetailDokter
    v-if="viewDetail"
    :title="title"
    :image="dataDetail.image"
    :name="dataDetail.name"
    :ket="dataDetail.ket"
    :tahun="dataDetail.tahun"
    :alumnus="dataDetail.alumnus"
    :practice="dataDetail.practice"
    :strNo="dataDetail.strNo"
    @onClosed="onClose"></CardDetailDokter>
  <CardChatDokter
    v-if="viewChat"
    :title="title"
    @onClosed="onClose"></CardChatDokter>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import DealsOfDay from "@/components/DealsOfDay.vue";
import CardDetailDokter from "@/components/CardDetailDokter";
import CardChatDokter from "@/components/CardChatDokter.vue";
export default {
  name: "OnlineConsulView",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    DealsOfDay,
    CardDetailDokter,
    CardChatDokter,
  },
  data() {
    return {
      dokter: [
        {
          id: 1,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 2,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Kambing",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 3,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Gozila",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 4,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 5,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 6,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 7,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 8,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 9,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 10,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 11,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
        {
          id: 12,
          image: "/assets/images/icon/1.png",
          name: "Dr. Markus Ayam",
          ket: "Dokter Umum",
          tahun: "20",
          alumnus: "Univ Bina Sarana Informatika",
          practice: "RS. Dukun Beranak",
          strNo: "00112233445566778899",
        },
      ],
      spesial: [
        {
          id: 1,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 2,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 3,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 4,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 5,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 6,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 7,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 8,
          image: "/assets/images/icon/1.png",
          name: "Spesialis Jantung",
        },
        {
          id: 9,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 10,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 11,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 12,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 13,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 14,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 15,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 16,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
        {
          id: 17,
          image: "/assets/images/icon/1.png",
          name: "Dokter Umum",
        },
      ],
      consult: [
        {
          id: 1,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "Pediatrics",
        },
        {
          id: 2,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "General Pyshician",
        },
        {
          id: 3,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "Determolgy",
        },
        {
          id: 4,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "Sexology",
        },
        {
          id: 5,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "Pediatrics",
        },
        {
          id: 6,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "General Pyshician",
        },
        {
          id: 7,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "Determolgy",
        },
        {
          id: 8,
          image: "/assets/images/icon/consult-ic1.svg",
          name: "Sexology",
        },
      ],
      itemShow: 5,
      scrollPosition: 0,
      scrollPosition1: 0,
      viewDetail: false,
      viewChat: false,
      dataDetail: {},
    };
  },
  mounted() {
    if (window.screen.width < 851) {
      this.itemShow = 2;
    }
  },
  methods: {
    showCardDetail(dok) {
      this.dataDetail = {};
      this.viewDetail = true;
      this.dataDetail = {
        id: dok.id,
        image: dok.image,
        name: dok.name,
        ket: dok.ket,
        tahun: dok.tahun,
        alumnus: dok.alumnus,
        practice: dok.practice,
        strNo: dok.strNo,
      };
    },
    showCardChat() {
      this.viewChat = true;
    },
    onClose(value) {
      this.dataDetail = {};
      this.viewDetail = value;
      this.viewChat = value;
    },
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.page-consul {
  margin-left: 25px;
  margin-right: 20px;
}

.page-ask {
  margin-left: 25px;
  margin-right: 20px;
}
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
  margin-top: 50px;
  line-height: 1.3em;
}
.sub-consul {
  color: #343a40;
  font-size: 14pt;
  font-weight: 400;
  font-family: Tahoma, sans-serif;
  margin-top: 10px;
  line-height: 1.3em;
}
.sub-consul2 {
  color: #000;
  font-size: 14pt;
  font-weight: 600;
  font-family: Tahoma, sans-serif;
  margin-top: 10px;
  line-height: 1.3em;
}
.btn-consul {
  margin-top: 20px;
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  color: #fff;
  padding: 0.7em 1.2em;
  background: #b22a2e;
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}
.btn-consul:hover {
  background-color: #000;
}
.btn-connow:hover {
  color: #b22a2e;
  cursor: pointer;
}
.btn-chat {
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  font-size: 12px;
  margin-left: 2px;
  padding: 1px 14px;
  color: #fff;
  background: #b22a2e;
  display: flex;
  transition: 0.2s background;
  align-items: center;
  font-weight: bold;
}
.btn-chat:hover {
  background-color: #000;
}
.btn-detail {
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  padding: 1px 6px;
  height: auto;
  color: #fff;
  background: #5a97fa;
  display: flex;
  transition: 0.2s background;
  align-items: center;
  font-weight: bold;
}
.btn-detail:hover {
  background-color: #000;
}

.ask-main img:hover,
.ask-main p:hover {
  cursor: pointer;
}
</style>
