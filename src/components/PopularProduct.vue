<template>
    <section class="product-tabs section-padding position-relative">
        <div class="container">
            <div class="section-title style-2 wow animate__animated animate__fadeIn">
                <div class="d-flex flex-row">
                    <div class="page-clip"></div>
                    <h3>Popular Products</h3>
                </div>
                <ul class="nav nav-tabs links" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation" v-for="title in popular" :key="title.id">
                        <button @click="selected = title.name" class="nav-link" :class="{active : selected === title.name}" type="button">{{ title.name }}</button>
                    </li>
                </ul>
            </div>
            
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane show active" role="tabpanel" v-for="box in popular" :key="box.id">
                    <div class="row product-grid-4" v-show="selected === box.name">
                        <div class="col-lg-1-5 col-md-4 col-12 col-sm-6" v-for="prod in box.product" :key="prod.id">
                            <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                <div class="product-img-action-wrap">
                                    <div class="product-img product-img-zoom">
                                        <router-link :to="{name: 'Product', params: {id: prod.id}}">
                                            <img class="default-img" :src="getProdctImage(prod.image1)" alt="" />
                                            <img class="hover-img" :src="getProdctImage(prod.image2)" alt="" />
                                        </router-link>
                                    </div>
                                    <div class="product-action-1">
                                        <a aria-label="Add To Wishlist" class="action-btn" href="shop-wishlist.html"><i class="fi-rs-heart"></i></a>
                                        <a aria-label="Quick view" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i class="fi-rs-eye"></i></a>
                                    </div>
                                    <div class="product-badges product-badges-position product-badges-mrg">
                                        <span :class="prod.label"><span v-if="prod.label !== 'best'">{{ prod.label }}</span><span v-if="prod.label === 'best'">-{{ prod.discount }}%</span></span>
                                    </div>
                                </div>
                                <div class="product-content-wrap">
                                    <div class="product-category">
                                        <a href="shop-grid-right.html">{{ prod.category }}</a>
                                    </div>
                                    <h2><a href="shop-product-right.html">{{ prod.name }}</a></h2>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" :style="{width: prod.rating + '%'}"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span class="font-small text-muted">By <a href="vendor-details-1.html">Apotik Melawai</a></span>
                                    </div>
                                    <div class="product-card-bottom">
                                        <div class="product-price d-flex flex-column">
                                            <span>Rp. {{ formatPrice(prod.price) }}</span>
                                            <span class="old-price">{{ countProductDiscount(prod.price, prod.discount) }}</span>
                                        </div>
                                        <div class="add-cart">
                                            <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>Add </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Quick view -->
    <div class="modal fade custom-modal" id="quickViewModal" tabindex="-1" aria-labelledby="quickViewModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                            <div class="detail-gallery">
                                <span class="zoom-icon"><i class="fi-rs-search"></i></span>
                                <!-- MAIN SLIDES -->
                                <div class="product-image-slider">
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-2.jpg" alt="product image" />
                                    </figure>
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-1.jpg" alt="product image" />
                                    </figure>
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-3.jpg" alt="product image" />
                                    </figure>
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-4.jpg" alt="product image" />
                                    </figure>
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-5.jpg" alt="product image" />
                                    </figure>
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-6.jpg" alt="product image" />
                                    </figure>
                                    <figure class="border-radius-10">
                                        <img src="/assets/images/products/product-16-7.jpg" alt="product image" />
                                    </figure>
                                </div>
                                <!-- THUMBNAILS -->
                                <div class="slider-nav-thumbnails">
                                    <div><img src="/assets/images/products/thumbnail-3.jpg" alt="product image" /></div>
                                    <div><img src="/assets/images/products/thumbnail-4.jpg" alt="product image" /></div>
                                    <div><img src="/assets/images/products/thumbnail-5.jpg" alt="product image" /></div>
                                    <div><img src="/assets/images/products/thumbnail-6.jpg" alt="product image" /></div>
                                    <div><img src="/assets/images/products/thumbnail-7.jpg" alt="product image" /></div>
                                    <div><img src="/assets/images/products/thumbnail-8.jpg" alt="product image" /></div>
                                    <div><img src="/assets/images/products/thumbnail-9.jpg" alt="product image" /></div>
                                </div>
                            </div>
                            <!-- End Gallery -->
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="detail-info pr-30 pl-30">
                                <span class="stock-status out-stock"> Sale Off </span>
                                <h3 class="title-detail"><a href="shop-product-right.html" class="text-heading">Seeds of Change Organic Quinoa, Brown</a></h3>
                                <div class="product-detail-rating">
                                    <div class="product-rate-cover text-end">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style="width: 90%"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (32 reviews)</span>
                                    </div>
                                </div>
                                <div class="clearfix product-price-cover">
                                    <div class="product-price primary-color float-left">
                                        <span class="current-price text-brand">$38</span>
                                        <span>
                                            <span class="save-price font-md color3 ml-15">26% Off</span>
                                            <span class="old-price font-md ml-15">$52</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="detail-extralink mb-30">
                                    <div class="detail-qty border radius">
                                        <a href="#" class="qty-down"><i class="fi-rs-angle-small-down"></i></a>
                                        <span class="qty-val">1</span>
                                        <a href="#" class="qty-up"><i class="fi-rs-angle-small-up"></i></a>
                                    </div>
                                    <div class="product-extra-link2">
                                        <button type="submit" class="button button-add-to-cart"><i class="fi-rs-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div class="font-xs">
                                    <ul>
                                        <li class="mb-5">Vendor: <span class="text-brand">Nest</span></li>
                                        <li class="mb-5">MFG:<span class="text-brand"> Jun 4.2022</span></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Detail Info -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopularProductVue',
    data(){
        return {
            popular: [
                {
                    id: 1,
                    name: 'All',
                    product: [
                        {
                            id: 'A1', 
                            category: 'Obat Batuk', 
                            vendor: 'Apotik Melawai', 
                            name: 'Woods Herbal 60ml', 
                            price: 29000, 
                            discount: 0, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'woods-herbal-1.jpg', 
                            image2: 'woods-herbal-2.jpg',
                        },
                        {
                            id: 'A2', 
                            category: 'Obat Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Sangobion Vitatonik 250ml', 
                            price: 39000, 
                            discount: 20, 
                            rating: 90, 
                            label: 'sale', 
                            image1: 'sangobion-1.jpg', 
                            image2: 'sangobion-2.jpg',
                        },
                        {
                            id: 'A3', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Adalat Oros 30mg 10 Tablet', 
                            price: 50000, 
                            discount: 10, 
                            rating: 90, 
                            label: 'new', 
                            image1: 'adalat-oros-1.jpg', 
                            image2: 'adalat-oros-2.jpg',
                        },
                        {
                            id: 'A4', 
                            category: 'Vitamin', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Bronson K2 as MK-7 120', 
                            price: 580000, 
                            discount: 15, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'bronson-k2-1.jpg', 
                            image2: 'bronson-k2-2.jpg',
                        },
                        {
                            id: 'A5', 
                            category: 'Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Enervon-C 100 Tablet', 
                            price: 114500, 
                            discount: 14, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'enervonc-1.jpg', 
                            image2: 'enervonc-2.jpg',
                        },
                        {
                            id: 'A6', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Abbotic XL 500mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'abbotic-xl-1.jpg', 
                            image2: 'abbotic-xl-2.jpg',
                        },
                        {
                            id: 'A7', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Alloris 10mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'alloris-1.jpg', 
                            image2: 'alloris-2.jpg',
                        },
                        {
                            id: 'A8', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Aerius 5mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'aerius-1.jpg', 
                            image2: 'aerius-2.jpg',
                        },
                        {
                            id: 'A9', 
                            category: 'Shampoo', 
                            vendor: 'Apotik Melawai', 
                            name: 'Dove Serum Shampoo', 
                            price: 108000, 
                            discount: 30, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'dove-serum-1.jpg', 
                            image2: 'dove-serum-2.jpg',
                        },
                        {
                            id: 'A10', 
                            category: 'Sanitizer', 
                            vendor: 'Apotik Melawai', 
                            name: 'Antis Spray', 
                            price: 15600, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'antis-spray-1.jpg', 
                            image2: 'antis-spray-2.jpg',
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Body Care',
                    product: [
                        {
                            id: 'A1', 
                            category: 'Obat Batuk', 
                            vendor: 'Apotik Melawai', 
                            name: 'Woods Herbal 60ml', 
                            price: 29000, 
                            discount: 0, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'woods-herbal-1.jpg', 
                            image2: 'woods-herbal-2.jpg',
                        },
                        {
                            id: 'A2', 
                            category: 'Obat Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Sangobion Vitatonik 250ml', 
                            price: 39000, 
                            discount: 20, 
                            rating: 90, 
                            label: 'sale', 
                            image1: 'sangobion-1.jpg', 
                            image2: 'sangobion-2.jpg',
                        },
                        {
                            id: 'A3', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Adalat Oros 30mg 10 Tablet', 
                            price: 50000, 
                            discount: 10, 
                            rating: 90, 
                            label: 'new', 
                            image1: 'adalat-oros-1.jpg', 
                            image2: 'adalat-oros-2.jpg',
                        },
                        {
                            id: 'A4', 
                            category: 'Vitamin', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Bronson K2 as MK-7 120', 
                            price: 580000, 
                            discount: 15, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'bronson-k2-1.jpg', 
                            image2: 'bronson-k2-2.jpg',
                        },
                        {
                            id: 'A5', 
                            category: 'Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Enervon-C 100 Tablet', 
                            price: 114500, 
                            discount: 14, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'enervonc-1.jpg', 
                            image2: 'enervonc-2.jpg',
                        },
                        {
                            id: 'A6', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Abbotic XL 500mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'abbotic-xl-1.jpg', 
                            image2: 'abbotic-xl-2.jpg',
                        },
                        {
                            id: 'A7', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Alloris 10mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'alloris-1.jpg', 
                            image2: 'alloris-2.jpg',
                        },
                        {
                            id: 'A8', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Aerius 5mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'aerius-1.jpg', 
                            image2: 'aerius-2.jpg',
                        },
                        {
                            id: 'A9', 
                            category: 'Shampoo', 
                            vendor: 'Apotik Melawai', 
                            name: 'Dove Serum Shampoo', 
                            price: 108000, 
                            discount: 30, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'dove-serum-1.jpg', 
                            image2: 'dove-serum-2.jpg',
                        },
                        {
                            id: 'A10', 
                            category: 'Sanitizer', 
                            vendor: 'Apotik Melawai', 
                            name: 'Antis Spray', 
                            price: 15600, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'antis-spray-1.jpg', 
                            image2: 'antis-spray-2.jpg',
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Multivitamin',
                    product: [
                        {
                            id: 'A1', 
                            category: 'Obat Batuk', 
                            vendor: 'Apotik Melawai', 
                            name: 'Woods Herbal 60ml', 
                            price: 29000, 
                            discount: 0, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'woods-herbal-1.jpg', 
                            image2: 'woods-herbal-2.jpg',
                        },
                        {
                            id: 'A2', 
                            category: 'Obat Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Sangobion Vitatonik 250ml', 
                            price: 39000, 
                            discount: 20, 
                            rating: 90, 
                            label: 'sale', 
                            image1: 'sangobion-1.jpg', 
                            image2: 'sangobion-2.jpg',
                        },
                        {
                            id: 'A3', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Adalat Oros 30mg 10 Tablet', 
                            price: 50000, 
                            discount: 10, 
                            rating: 90, 
                            label: 'new', 
                            image1: 'adalat-oros-1.jpg', 
                            image2: 'adalat-oros-2.jpg',
                        },
                        {
                            id: 'A4', 
                            category: 'Vitamin', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Bronson K2 as MK-7 120', 
                            price: 580000, 
                            discount: 15, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'bronson-k2-1.jpg', 
                            image2: 'bronson-k2-2.jpg',
                        },
                        {
                            id: 'A5', 
                            category: 'Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Enervon-C 100 Tablet', 
                            price: 114500, 
                            discount: 14, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'enervonc-1.jpg', 
                            image2: 'enervonc-2.jpg',
                        },
                        {
                            id: 'A6', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Abbotic XL 500mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'abbotic-xl-1.jpg', 
                            image2: 'abbotic-xl-2.jpg',
                        },
                        {
                            id: 'A7', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Alloris 10mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'alloris-1.jpg', 
                            image2: 'alloris-2.jpg',
                        },
                        {
                            id: 'A8', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Aerius 5mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'aerius-1.jpg', 
                            image2: 'aerius-2.jpg',
                        },
                        {
                            id: 'A9', 
                            category: 'Shampoo', 
                            vendor: 'Apotik Melawai', 
                            name: 'Dove Serum Shampoo', 
                            price: 108000, 
                            discount: 30, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'dove-serum-1.jpg', 
                            image2: 'dove-serum-2.jpg',
                        },
                        {
                            id: 'A10', 
                            category: 'Sanitizer', 
                            vendor: 'Apotik Melawai', 
                            name: 'Antis Spray', 
                            price: 15600, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'antis-spray-1.jpg', 
                            image2: 'antis-spray-2.jpg',
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Mother and Baby',
                    product: [
                        {
                            id: 'A1', 
                            category: 'Obat Batuk', 
                            vendor: 'Apotik Melawai', 
                            name: 'Woods Herbal 60ml', 
                            price: 29000, 
                            discount: 0, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'woods-herbal-1.jpg', 
                            image2: 'woods-herbal-2.jpg',
                        },
                        {
                            id: 'A2', 
                            category: 'Obat Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Sangobion Vitatonik 250ml', 
                            price: 39000, 
                            discount: 20, 
                            rating: 90, 
                            label: 'sale', 
                            image1: 'sangobion-1.jpg', 
                            image2: 'sangobion-2.jpg',
                        },
                        {
                            id: 'A3', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Adalat Oros 30mg 10 Tablet', 
                            price: 50000, 
                            discount: 10, 
                            rating: 90, 
                            label: 'new', 
                            image1: 'adalat-oros-1.jpg', 
                            image2: 'adalat-oros-2.jpg',
                        },
                        {
                            id: 'A4', 
                            category: 'Vitamin', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Bronson K2 as MK-7 120', 
                            price: 580000, 
                            discount: 15, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'bronson-k2-1.jpg', 
                            image2: 'bronson-k2-2.jpg',
                        },
                        {
                            id: 'A5', 
                            category: 'Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Enervon-C 100 Tablet', 
                            price: 114500, 
                            discount: 14, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'enervonc-1.jpg', 
                            image2: 'enervonc-2.jpg',
                        },
                        {
                            id: 'A6', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Abbotic XL 500mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'abbotic-xl-1.jpg', 
                            image2: 'abbotic-xl-2.jpg',
                        },
                        {
                            id: 'A7', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Alloris 10mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'alloris-1.jpg', 
                            image2: 'alloris-2.jpg',
                        },
                        {
                            id: 'A8', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Aerius 5mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'aerius-1.jpg', 
                            image2: 'aerius-2.jpg',
                        },
                        {
                            id: 'A9', 
                            category: 'Shampoo', 
                            vendor: 'Apotik Melawai', 
                            name: 'Dove Serum Shampoo', 
                            price: 108000, 
                            discount: 30, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'dove-serum-1.jpg', 
                            image2: 'dove-serum-2.jpg',
                        },
                        {
                            id: 'A10', 
                            category: 'Sanitizer', 
                            vendor: 'Apotik Melawai', 
                            name: 'Antis Spray', 
                            price: 15600, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'antis-spray-1.jpg', 
                            image2: 'antis-spray-2.jpg',
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'Skin Care',
                    product: [
                        {
                            id: 'A1', 
                            category: 'Obat Batuk', 
                            vendor: 'Apotik Melawai', 
                            name: 'Woods Herbal 60ml', 
                            price: 29000, 
                            discount: 0, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'woods-herbal-1.jpg', 
                            image2: 'woods-herbal-2.jpg',
                        },
                        {
                            id: 'A2', 
                            category: 'Obat Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Sangobion Vitatonik 250ml', 
                            price: 39000, 
                            discount: 20, 
                            rating: 90, 
                            label: 'sale', 
                            image1: 'sangobion-1.jpg', 
                            image2: 'sangobion-2.jpg',
                        },
                        {
                            id: 'A3', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Adalat Oros 30mg 10 Tablet', 
                            price: 50000, 
                            discount: 10, 
                            rating: 90, 
                            label: 'new', 
                            image1: 'adalat-oros-1.jpg', 
                            image2: 'adalat-oros-2.jpg',
                        },
                        {
                            id: 'A4', 
                            category: 'Vitamin', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Bronson K2 as MK-7 120', 
                            price: 580000, 
                            discount: 15, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'bronson-k2-1.jpg', 
                            image2: 'bronson-k2-2.jpg',
                        },
                        {
                            id: 'A5', 
                            category: 'Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Enervon-C 100 Tablet', 
                            price: 114500, 
                            discount: 14, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'enervonc-1.jpg', 
                            image2: 'enervonc-2.jpg',
                        },
                        {
                            id: 'A6', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Abbotic XL 500mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'abbotic-xl-1.jpg', 
                            image2: 'abbotic-xl-2.jpg',
                        },
                        {
                            id: 'A7', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Alloris 10mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'alloris-1.jpg', 
                            image2: 'alloris-2.jpg',
                        },
                        {
                            id: 'A8', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Aerius 5mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'aerius-1.jpg', 
                            image2: 'aerius-2.jpg',
                        },
                        {
                            id: 'A9', 
                            category: 'Shampoo', 
                            vendor: 'Apotik Melawai', 
                            name: 'Dove Serum Shampoo', 
                            price: 108000, 
                            discount: 30, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'dove-serum-1.jpg', 
                            image2: 'dove-serum-2.jpg',
                        },
                        {
                            id: 'A10', 
                            category: 'Sanitizer', 
                            vendor: 'Apotik Melawai', 
                            name: 'Antis Spray', 
                            price: 15600, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'antis-spray-1.jpg', 
                            image2: 'antis-spray-2.jpg',
                        },
                    ]
                },
                {
                    id: 6,
                    name: 'Dermatologicals',
                    product: [
                        {
                            id: 'A1', 
                            category: 'Obat Batuk', 
                            vendor: 'Apotik Melawai', 
                            name: 'Woods Herbal 60ml', 
                            price: 29000, 
                            discount: 0, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'woods-herbal-1.jpg', 
                            image2: 'woods-herbal-2.jpg',
                        },
                        {
                            id: 'A2', 
                            category: 'Obat Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Sangobion Vitatonik 250ml', 
                            price: 39000, 
                            discount: 20, 
                            rating: 90, 
                            label: 'sale', 
                            image1: 'sangobion-1.jpg', 
                            image2: 'sangobion-2.jpg',
                        },
                        {
                            id: 'A3', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Adalat Oros 30mg 10 Tablet', 
                            price: 50000, 
                            discount: 10, 
                            rating: 90, 
                            label: 'new', 
                            image1: 'adalat-oros-1.jpg', 
                            image2: 'adalat-oros-2.jpg',
                        },
                        {
                            id: 'A4', 
                            category: 'Vitamin', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Bronson K2 as MK-7 120', 
                            price: 580000, 
                            discount: 15, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'bronson-k2-1.jpg', 
                            image2: 'bronson-k2-2.jpg',
                        },
                        {
                            id: 'A5', 
                            category: 'Suplement', 
                            vendor: 'Apotik Melawai', 
                            name: 'Enervon-C 100 Tablet', 
                            price: 114500, 
                            discount: 14, 
                            rating: 90, 
                            label: 'best', 
                            image1: 'enervonc-1.jpg', 
                            image2: 'enervonc-2.jpg',
                        },
                        {
                            id: 'A6', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Abbotic XL 500mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'abbotic-xl-1.jpg', 
                            image2: 'abbotic-xl-2.jpg',
                        },
                        {
                            id: 'A7', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Alloris 10mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'alloris-1.jpg', 
                            image2: 'alloris-2.jpg',
                        },
                        {
                            id: 'A8', 
                            category: 'Obat Keras', 
                            vendor: 'Apotik Melawai Sunter', 
                            name: 'Aerius 5mg TAB', 
                            price: 50000, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'aerius-1.jpg', 
                            image2: 'aerius-2.jpg',
                        },
                        {
                            id: 'A9', 
                            category: 'Shampoo', 
                            vendor: 'Apotik Melawai', 
                            name: 'Dove Serum Shampoo', 
                            price: 108000, 
                            discount: 30, 
                            rating: 90, 
                            label: 'hot', 
                            image1: 'dove-serum-1.jpg', 
                            image2: 'dove-serum-2.jpg',
                        },
                        {
                            id: 'A10', 
                            category: 'Sanitizer', 
                            vendor: 'Apotik Melawai', 
                            name: 'Antis Spray', 
                            price: 15600, 
                            discount: 0, 
                            rating: 90, 
                            label: '', 
                            image1: 'antis-spray-1.jpg', 
                            image2: 'antis-spray-2.jpg',
                        },
                    ]
                }
            ],
            selected: 'All',
        }
    },
    methods: {
        getProdctImage(filename){
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