<template>
    <section class="section-padding mb-30">
        <div class="container">
            <div class="row">

                <div v-for="cat in products" :key="cat.id" class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                    <h4 class="section-title style-1 mb-30 animated animated">{{ cat.name }}</h4>
                    <div class="product-list-small animated animated mt-2" v-for="prod in cat.product" :key="prod.id">
                        <article class="row align-items-center hover-up">
                            <figure class="col-md-4 mb-0">
                                <a :href="'/product/' + prod.id">
                                    <img :src="getProductImage(prod.image)" alt="" />
                                </a>
                            </figure>
                            <div class="col-md-8 mb-0">
                                <h6>
                                    <a href="shop-product-right.html">{{ prod.name }}</a>
                                </h6>
                                <div class="product-rate-cover">
                                    <div class="product-rate d-inline-block">
                                        <div class="product-rating" :style="{width: prod.rating +'%'}"></div>
                                    </div>
                                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                                </div>
                                <div class="product-price d-flex flex-column">
                                    <span v-if="prod.discount <= 0">Rp. {{ formatPrice(prod.price) }}</span>
                                    <div v-if="prod.discount > 0" class="d-flex flex-column">
                                        <span>Rp. {{ countProductDiscount(prod.price, prod.discount) }}</span>
                                        <span class="old-price">Rp. {{ formatPrice(prod.price) }}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductListFourVue',
    data(){
        return {
            products: [
                {
                    id: 1,
                    name: 'Top Selling',
                    product: [
                        {id: 'A1', name: 'Garnier Serum Mask', price: 23500, discount: 18, rating: 85, image: 'garnier-serum-mask-1.jpg'},
                        {id: 'A2', name: 'Somethinc AHA BHA PHA', price: 131000, discount: 40, rating: 95, image: 'somethinc-aha-bha-pha-1.jpg'},
                        {id: 'A3', name: 'Garnier Micellar Water', price: 33000, discount: 33, rating: 90, image: 'garnier-micellar-water-1.jpg'},
                    ]
                },
                {
                    id: 2,
                    name: 'Trending Product',
                    product: [
                        {id: 'A4', name: 'Detol Hand Wash', price: 40000, discount: 15, rating: 80, image: 'detol-hand-wash-1.jpg'},
                        {id: 'A5', name: 'Scarlett Glowtening Serum', price: 55000, discount: 10, rating: 92, image: 'scarlett-glowtening-serum-1.jpg'},
                        {id: 'A6', name: 'Blackmores Multivitamin', price: 156000, discount: 25, rating: 75, image: 'blackmores-1.jpg'},
                    ]
                },
                {
                    id: 3,
                    name: 'Recently Added',
                    product: [
                        {id: 'A7', name: 'Alloris 10mg TAB', price: 50000, discount: 0, rating: 80, image: 'alloris-1.jpg'},
                        {id: 'A8', name: 'Adalat Oros 30mg', price: 50000, discount: 0, rating: 80, image: 'adalat-oros-1.jpg'},
                        {id: 'A9', name: 'Abbotic XL 500mg', price: 50000, discount: 0, rating: 80, image: 'abbotic-xl-1.jpg'},
                    ]
                },
                {
                    id: 4,
                    name: 'Top Rated',
                    product: [
                        {id: 'A10', name: 'Sangobion Vitatonik 250ml', price: 39000, discount: 20, rating: 95, image: 'sangobion-1.jpg'},
                        {id: 'A11', name: 'DoveSerum Shampoo', price: 108000, discount: 30, rating: 95, image: 'dove-serum-1.jpg'},
                        {id: 'A12', name: 'Ponds Age Miracle', price: 79000, discount: 10, rating: 95, image: 'ponds-age-miracle-1.jpg'},
                    ]
                }
            ]
        }
    },
    methods: {
        getProductImage(filename){
            return '/assets/images/products/' + filename;
        },
        formatPrice(value){
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        countProductDiscount(price, disc){
            var countDisc = (price * disc) / 100;
            var total = price - countDisc;
            let val = (total/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>

<style>

</style>