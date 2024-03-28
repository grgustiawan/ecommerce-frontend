<template>
  <main class="main">
        <div class="container mb-30 mt-30">
            <div class="row">
                <div class="col-12">
                    <div class="shop-product-fillter">
                        <div class="totall-product">
                            <p>We found <strong class="text-brand">29</strong> items for you!</p>
                        </div>
                        <div class="sort-by-product-area">
                            <div class="sort-by-cover mr-10">
                                <div class="sort-by-product-wrap">
                                    <div class="sort-by">
                                        <span><i class="fi-rs-apps"></i>Show:</span>
                                    </div>
                                    <div class="sort-by-dropdown-wrap">
                                        <span> 50 <i class="fi-rs-angle-small-down"></i></span>
                                    </div>
                                </div>
                                <div class="sort-by-dropdown">
                                    <ul>
                                        <li><a class="active" href="#">50</a></li>
                                        <li><a href="#">100</a></li>
                                        <li><a href="#">150</a></li>
                                        <li><a href="#">200</a></li>
                                        <li><a href="#">All</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sort-by-cover">
                                <div class="sort-by-product-wrap">
                                    <div class="sort-by">
                                        <span><i class="fi-rs-apps-sort"></i>Sort by:</span>
                                    </div>
                                    <div class="sort-by-dropdown-wrap">
                                        <span> Featured <i class="fi-rs-angle-small-down"></i></span>
                                    </div>
                                </div>
                                <div class="sort-by-dropdown">
                                    <ul>
                                        <li><a class="active" href="#">Featured</a></li>
                                        <li><a href="#">Price: Low to High</a></li>
                                        <li><a href="#">Price: High to Low</a></li>
                                        <li><a href="#">Release Date</a></li>
                                        <li><a href="#">Avg. Rating</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Product Card -->
                    <div class="row product-grid">
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6" v-for="data in product" :key="data.kdbarang">
                            <div class="product-cart-wrap mb-30">
                                <div class="product-img-action-wrap">
                                    <div class="product-img product-img-zoom">
                                        <a :href="'/product/' + data.kdbarang">
                                            <img class="default-img" :id="'default-img' + data.kdbarang" alt="" />
                                            <img class="hover-img" :id="'hover-img' + data.kdbarang" alt="" />
                                        </a>
                                    </div>
                                    <div class="product-badges product-badges-position product-badges-mrg">
                                        <span class="sale">Sale</span>
                                    </div>
                                </div>
                                <div class="product-content-wrap">
                                    <div class="product-category">
                                        <a :href="'/category/' + data.kategori">{{ data.kategori }}</a>
                                    </div>
                                    <h2><a :href="'/product/' + data.kdbarang">{{ data.namabarang }}</a></h2>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style="width: 90%"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span class="font-small text-muted">By <a href="vendor-details-1.html">Apotik Melawai</a></span>
                                    </div>
                                    <div class="product-card-bottom">
                                        <div class="product-price">
                                            <span>Rp. {{ formatPrice(data.hargajual) }}</span>
                                            <!-- <span class="old-price">$32.8</span> -->
                                        </div>
                                        <div class="add-cart">
                                            <a class="add"><i class="fi-rs-shopping-cart mr-5"></i>Add </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--product grid-->
                    <div class="pagination-area mt-20 mb-20">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fi-rs-arrow-small-left"></i></a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link dot" href="#">...</a></li>
                                <li class="page-item"><a class="page-link" href="#">6</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fi-rs-arrow-small-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Preloader></Preloader>
</template>

<script>
import axios from 'axios';
import Preloader from '../components/Preloader.vue';

export default {
    name: 'AllProductView',
    components: {
        Preloader,
    },
    data(){
        return {
            product: [],
            isLoading: false,
        }
    },
    created(){
        this.getProducts();
    },
    methods: {
        async getProducts(){
            try {
                this.isLoading = true;
                const { data } = await axios.get(this.product + '/masterbarang');

                this.product = data;
                await Promise.all([
                    this.product.forEach(async(data) => {
                        if(data.image[0]){
                            this.getImage(data.image[0], data.kdbarang);
                        }
                    })
                ]);

                this.isLoading = true;
            } catch(error){
                console.log(error);
            }
        },
        async getImage(image, kdbarang){
          await fetch(`${this.product}/images/${image.imgid}`, {
            method: 'GET',
          }).then((res) => {
                return res.blob()
          }).then((blob) => {
                let url = URL.createObjectURL(blob)
                document.getElementById('default-img' + kdbarang).src = url
          })
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    }
}
</script>

<style>

</style>