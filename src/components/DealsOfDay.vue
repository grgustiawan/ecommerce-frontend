<template>
    <section class="section-padding pb-5">
        <div class="container">
            <div class="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                <div class="d-flex flex-row">
                    <div class="page-clip"></div>
                    <h3 class="">Deals Of The Day</h3>
                </div>
                <a class="show-all" href="shop-grid-right.html">
                    <div class="view-btn">View All</div>
                </a>
            </div>
            <Carousel :autoplay="2500" :itemsToShow="3" :wrapAround="true" :transition="500">
                <Slide v-for="side in deals" :key="side.id">
                    <div class="wow animate__animated animate__fadeInUp deals-box" data-wow-delay="0">
                        <a href="shop-product-right.html">
                            <img class="deals-img" :src="getDealsImg(side.image)" alt="" />
                        </a>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
export default {
    name: 'DealsOfDay',
    components: {
        Carousel, Slide,
    },
    data(){
        return {
            deals: [
                {id: 1, image: 'deals-1.jpg'},
                {id: 2, image: 'deals-2.jpg'},
                {id: 3, image: 'deals-3.jpg'},
                {id: 4, image: 'deals-4.jpg'},
            ],
        }
    },
    methods: {
        getDealsImg(filename){
            return '/assets/images/banner/' + filename;
        }
    }
}
</script>

<style>
.deals-box{
    margin: 15px;
    width: 30vw;
    transition: .5s ease;
}

.deals-box:hover{
    transform: scale(1.09);
}

.deals-img{
    width: 100%;
    object-fit: contain;
    margin: 10px;
    border: 2px solid #d2d2d2;
    border-radius: 5px;
}

.deals-img:hover{
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.20), 0 1px 2px rgba(0, 0, 0, 0.35);
}
</style>