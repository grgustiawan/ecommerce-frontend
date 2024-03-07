<template>
  <section
    class="section-padding pb-5"
    style="margin-bottom: 50px"
    v-show="!isExpired">
    <div class="container">
      <div class="section-title wow animate__animated animate__fadeIn">
        <div class="d-flex flex-row">
          <div class="page-clip"></div>
          <!-- <h3 class="">Flash Sale</h3> -->
          <img
            style="width: 200px; object-fit: contain"
            src="/assets/images/theme/Flashtime.png"
            alt="" />

          <div
            class="timer-container"
            style="margin-left: 30px; margin-top: 6px">
            <div class="timer-box">{{ hours }}</div>
            <div class="timer-box">{{ minutes }}</div>
            <div class="timer-box">{{ seconds }}</div>
          </div>
        </div>

        <ul
          class="nav nav-tabs links"
          id="myTab-2"
          role="tablist"
          v-for="title in flashsale"
          :key="title.id">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: title.id === selecteditem }"
              @click="selecteditem = title.id">
              <span style="margin-left: 20px">
                {{ title.name }}
              </span>
            </button>
            <div
              style="
                width: 100%;
                height: 4px;
                background: #b22a2e;
                margin-top: 15px;
              "
              v-show="title.id === selecteditem"></div>
          </li>
        </ul>
      </div>
      <div class="row">
        <div
          class="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
          <div class="banner-img style-2">
            <Carousel
              :autoplay="2000"
              :itemsToShow="1"
              :wrapAround="true"
              :transition="1000">
              <Slide v-for="slide in banner" :key="slide.id">
                <div
                  class="wow animate__animated animate__fadeInUp"
                  data-wow-delay="0">
                  <a href="shop-product-right.html">
                    <img :src="getBannerImg(slide.image)" alt="" />
                  </a>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>

        <div
          class="col-lg-9 col-md-12 wow animate__animated animate__fadeIn"
          data-wow-delay=".4s">
          <div
            class="tab-content"
            id="myTabContent-1"
            v-for="flash in flashsale"
            :key="flash.id">
            <div v-show="flash.id === selecteditem">
              <Splide
                :options="{
                  rewind: true,
                  autoplay: 'pause',
                  perPage: 4,
                  pagination: false,
                  type: 'loop',
                  snap: 'center',
                  arrows: true,
                  gap: '1rem',
                }"
                aria-label="My Favorite Images">
                <SplideSlide v-for="prod in flash.products" :key="prod.id">
                  <div class="product-cart-wrap" style="height: 520px">
                    <div class="product-img-action-wrap">
                      <div class="product-img product-img-zoom">
                        <a :href="'/product/' + prod.id">
                          <img
                            class="default-img"
                            :src="getProductImage(prod.image1)"
                            alt="" />
                          <img
                            class="hover-img"
                            :src="getProductImage(prod.image2)"
                            alt="" />
                        </a>
                      </div>
                      <div class="product-action-1">
                        <a
                          aria-label="Quick view"
                          class="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal">
                          <i class="fi-rs-eye"></i
                        ></a>
                        <a
                          aria-label="Add To Wishlist"
                          class="action-btn small hover-up"
                          href="shop-wishlist.html"
                          ><i class="fi-rs-heart"></i
                        ></a>
                      </div>
                      <div
                        class="product-badges product-badges-position product-badges-mrg">
                        <span class="best">{{ prod.discount }}% OFF</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <a href="shop-grid-right.html">{{ prod.category }}</a>
                      </div>
                      <h2 style="font-size: 12pt">
                        <a href="shop-product-right.html">{{ prod.name }}</a>
                      </h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          :style="{ width: prod.rating + '%' }"></div>
                      </div>
                      <div class="product-price mt-10 d-flex flex-column">
                        <span
                          >Rp.
                          {{
                            countProductDiscount(prod.price, prod.discount)
                          }}</span
                        >
                        <span class="old-price"
                          >Rp. {{ formatPrice(prod.price) }}</span
                        >
                      </div>
                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            :class="{
                              'progress-bar-low':
                                countProductSold(prod.sold, prod.qty) <= 30,
                              'progress-bar-med':
                                countProductSold(prod.sold, prod.qty) > 30 &&
                                countProductSold(prod.sold, prod.qty) <= 60,
                              'progress-bar-high':
                                countProductSold(prod.sold, prod.qty) > 60 &&
                                countProductSold(prod.sold, prod.qty) <= 90,
                              'progress-bar':
                                countProductSold(prod.sold, prod.qty) > 90,
                            }"
                            role="progressbar"
                            :style="{
                              width:
                                countProductSold(prod.sold, prod.qty) + '%',
                            }"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <span
                          class="font-xs text-heading"
                          v-show="countProductSold(prod.sold, prod.qty) <= 90"
                          >{{ prod.qty - prod.sold }} Stock Left</span
                        >
                        <span
                          class="font-xs text-heading"
                          v-show="countProductSold(prod.sold, prod.qty) > 90"
                          >Run Out Soon</span
                        >
                      </div>
                      <a
                        href="shop-cart.html"
                        class="btn w-100"
                        style="
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          border-radius: 0;
                        "
                        ><i class="fi-rs-shopping-cart mr-5"></i>Add To Cart</a
                      >
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <!--End tab-content-->
        </div>
        <!--End Col-lg-9-->
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import "@splidejs/vue-splide/css/core";
export default {
  name: "DailyBestSell",
  components: {
    Splide,
    SplideSlide,
    Carousel,
    Slide,
  },
  data() {
    return {
      selecteditem: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
      banner: [
        { id: 1, image: "flashsale.png" },
        { id: 2, image: "flashsale-2.png" },
        { id: 3, image: "flashsale-3.png" },
      ],
      flashsale: [
        {
          id: 1,
          name: "All",
          products: [
            {
              id: "A1",
              category: "Multivitamin",
              name: "Blackmores Multivitamin",
              price: 156000,
              discount: 25,
              qty: 120,
              sold: 90,
              rating: 70,
              seller: "Apotik Melawai",
              image1: "blackmores-1.jpg",
              image2: "blackmores-2.jpg",
            },
            {
              id: "A13",
              category: "Hand Sanitizer",
              name: "Saniter Hand Sanitizer",
              price: 12000,
              discount: 30,
              qty: 120,
              sold: 55,
              rating: 85,
              seller: "Apotik Melawai",
              image1: "saniter-hand-sanitizer-1.jpg",
              image2: "saniter-hand-sanitizer-2.jpg",
            },
            {
              id: "A3",
              category: "Day Cream",
              name: "Ponds Age Miracle",
              price: 79000,
              discount: 10,
              qty: 120,
              sold: 54,
              rating: 90,
              seller: "Apotik Melawai",
              image1: "ponds-age-miracle-1.jpg",
              image2: "ponds-age-miracle-2.jpg",
            },
            {
              id: "A9",
              category: "Skin Care",
              name: "Somethinc AHA BHA PHA",
              price: 131000,
              discount: 40,
              qty: 120,
              sold: 110,
              rating: 90,
              seller: "Apotik Melawai",
              image1: "somethinc-aha-bha-pha-1.jpg",
              image2: "somethinc-aha-bha-pha-2.jpg",
            },
            {
              id: "A5",
              category: "Cleansing Water",
              name: "Garnier Micellar Water",
              price: 33000,
              discount: 33,
              qty: 120,
              sold: 78,
              rating: 93,
              seller: "Apotik Melawai",
              image1: "garnier-micellar-water-1.jpg",
              image2: "garnier-micellar-water-2.jpg",
            },
            {
              id: "A6",
              category: "Face Wash",
              name: "Garnier Light Complete",
              price: 33000,
              discount: 10,
              qty: 120,
              sold: 63,
              rating: 80,
              seller: "Apotik Melawai",
              image1: "garnier-light-complete-1.jpg",
              image2: "garnier-light-complete-2.jpg",
            },
            {
              id: "A7",
              category: "Face Mask",
              name: "Garnier Serum Mask",
              price: 23500,
              discount: 18,
              qty: 120,
              sold: 111,
              rating: 70,
              seller: "Apotik Melawai",
              image1: "garnier-serum-mask-1.jpg",
              image2: "garnier-serum-mask-2.jpg",
            },
            {
              id: "A8",
              category: "Skin Care",
              name: "SK-II SKINPOWER Cream",
              price: 2900000,
              discount: 20,
              qty: 120,
              sold: 10,
              rating: 98,
              seller: "Apotik Melawai",
              image1: "sk-ii-skinpower-1.jpg",
              image2: "sk-ii-skinpower-2.jpg",
            },
            {
              id: "A4",
              category: "Shampoo",
              name: "Dove Shampoo Ultra Care",
              price: 11000,
              discount: 35,
              qty: 120,
              sold: 34,
              rating: 80,
              seller: "Apotik Melawai",
              image1: "dove-ultra-care-1.jpg",
              image2: "dove-ultra-care-2.jpg",
            },
            {
              id: "A10",
              category: "Skin Care",
              name: "Scarlett Glowtening Serum",
              price: 55000,
              discount: 10,
              qty: 120,
              sold: 60,
              rating: 85,
              seller: "Apotik Melawai",
              image1: "scarlett-glowtening-serum-1.jpg",
              image2: "scarlett-glowtening-serum-2.jpg",
            },
            {
              id: "A11",
              category: "Body Wash",
              name: "Lifebuoy Ultra Protection",
              price: 58000,
              discount: 22,
              qty: 120,
              sold: 11,
              rating: 65,
              seller: "Apotik Melawai",
              image1: "lifebuoy-body-wash-1.jpg",
              image2: "lifebuoy-body-wash-2.jpg",
            },
            {
              id: "A12",
              category: "Hand Wash",
              name: "Detol Hand Wash",
              price: 40000,
              discount: 15,
              qty: 120,
              sold: 66,
              rating: 80,
              seller: "Apotik Melawai",
              image1: "detol-hand-wash-1.jpg",
              image2: "detol-hand-wash-2.jpg",
            },
            {
              id: "A2",
              category: "Face Wash",
              name: "Garnier Men Charcoal",
              price: 40000,
              discount: 15,
              qty: 120,
              sold: 32,
              rating: 85,
              seller: "Apotik Melawai",
              image1: "garnier-men-charcoal-1.jpg",
              image2: "garnier-men-charcoal-2.jpg",
            },
          ],
        },
        {
          id: 2,
          name: "Super Brand Day",
          products: [
            {
              id: "B1",
              category: "Face Wash",
              name: "Garnier Men Charcoal",
              price: 40000,
              discount: 15,
              qty: 120,
              sold: 32,
              rating: 85,
              seller: "Apotik Melawai",
              image1: "garnier-men-charcoal-1.jpg",
              image2: "garnier-men-charcoal-2.jpg",
            },
            {
              id: "B2",
              category: "Cleansing Water",
              name: "Garnier Micellar Water",
              price: 33000,
              discount: 33,
              qty: 120,
              sold: 78,
              rating: 93,
              seller: "Apotik Melawai",
              image1: "garnier-micellar-water-1.jpg",
              image2: "garnier-micellar-water-2.jpg",
            },
            {
              id: "B3",
              category: "Face Wash",
              name: "Garnier Light Complete",
              price: 33000,
              discount: 10,
              qty: 120,
              sold: 63,
              rating: 80,
              seller: "Apotik Melawai",
              image1: "garnier-light-complete-1.jpg",
              image2: "garnier-light-complete-2.jpg",
            },
            {
              id: "B4",
              category: "Face Mask",
              name: "Garnier Serum Mask",
              price: 23500,
              discount: 18,
              qty: 120,
              sold: 111,
              rating: 70,
              seller: "Apotik Melawai",
              image1: "garnier-serum-mask-1.jpg",
              image2: "garnier-serum-mask-2.jpg",
            },
          ],
        },
        {
          id: 3,
          name: "Grand Beauty",
          products: [
            {
              id: "G1",
              category: "Day Cream",
              name: "Ponds Age Miracle",
              price: 79000,
              discount: 10,
              qty: 120,
              sold: 54,
              rating: 90,
              seller: "Apotik Melawai",
              image1: "ponds-age-miracle-1.jpg",
              image2: "ponds-age-miracle-2.jpg",
            },
            {
              id: "G2",
              category: "Skin Care",
              name: "SK-II SKINPOWER Cream",
              price: 2900000,
              discount: 20,
              qty: 120,
              sold: 10,
              rating: 98,
              seller: "Apotik Melawai",
              image1: "sk-ii-skinpower-1.jpg",
              image2: "sk-ii-skinpower-2.jpg",
            },
            {
              id: "G3",
              category: "Skin Care",
              name: "Somethinc AHA BHA PHA",
              price: 131000,
              discount: 40,
              qty: 120,
              sold: 110,
              rating: 90,
              seller: "Apotik Melawai",
              image1: "somethinc-aha-bha-pha-1.jpg",
              image2: "somethinc-aha-bha-pha-2.jpg",
            },
            {
              id: "G4",
              category: "Skin Care",
              name: "Scarlett Glowtening Serum",
              price: 55000,
              discount: 10,
              qty: 120,
              sold: 60,
              rating: 85,
              seller: "Apotik Melawai",
              image1: "scarlett-glowtening-serum-1.jpg",
              image2: "scarlett-glowtening-serum-2.jpg",
            },
          ],
        },
        {
          id: 4,
          name: "Body Care",
          products: [
            {
              id: "C1",
              category: "Shampoo",
              name: "Dove Shampoo Ultra Care",
              price: 156000,
              discount: 35,
              qty: 120,
              sold: 34,
              rating: 80,
              seller: "Apotik Melawai",
              image1: "dove-ultra-care-1.jpg",
              image2: "dove-ultra-care-2.jpg",
            },
            {
              id: "C2",
              category: "Body Wash",
              name: "Lifebuoy Ultra Protection",
              price: 58000,
              discount: 22,
              qty: 120,
              sold: 11,
              rating: 65,
              seller: "Apotik Melawai",
              image1: "lifebuoy-body-wash-1.jpg",
              image2: "lifebuoy-body-wash-2.jpg",
            },
            {
              id: "C3",
              category: "Hand Wash",
              name: "Detol Hand Wash",
              price: 40000,
              discount: 15,
              qty: 120,
              sold: 66,
              rating: 80,
              seller: "Apotik Melawai",
              image1: "detol-hand-wash-1.jpg",
              image2: "detol-hand-wash-2.jpg",
            },
            {
              id: "C4",
              category: "Hand Sanitizer",
              name: "Saniter Hand Sanitizer",
              price: 12000,
              discount: 30,
              qty: 120,
              sold: 55,
              rating: 85,
              seller: "Apotik Melawai",
              image1: "saniter-hand-sanitizer-1.jpg",
              image2: "saniter-hand-sanitizer-2.jpg",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.countdownTimer();
  },
  methods: {
    getProductImage(filename) {
      return "/assets/images/products/" + filename;
    },
    getBannerImg(filename) {
      return "/assets/images/banner/" + filename;
    },
    countProductSold(sold, qty) {
      var count = (sold / qty) * 100;
      return count;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    countProductDiscount(price, disc) {
      var countDisc = (price * disc) / 100;
      var total = price - countDisc;
      let val = (total / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    countdownTimer() {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;

      var countDownDate = new Date("2024-03-29 23:59:00").getTime();
      setInterval(() => {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) this.isExpired = true;
      }, 1000);
    },
  },
};
</script>

<style>
.timer-container {
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.timer-container .timer-box {
  width: 35px;
  height: 35px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14pt;
  padding-top: 5px;
}

.runingout {
  position: absolute;
  left: 0;
  margin-top: -20px;
}
</style>
