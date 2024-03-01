<template>
    <main class="main pages mb-80">
        <div class="page-content pt-50">
            <div class="container">
                <div class="archive-header-2 text-center">
                    <h1 class="display-2 mb-50">Store Location</h1>
                    <div class="row">
                        <div class="col-lg-5 mx-auto">
                            <div class="sidebar-widget-2 widget_search mb-50">
                                <div class="search-form">
                                    <form action="#">
                                        <input type="text" placeholder="Search store by name..." />
                                        <button type="submit"><i class="fi-rs-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-50">
                    <div class="col-12 col-lg-8 mx-auto">
                        <div class="shop-product-fillter">
                            <div class="totall-product">
                                <p>We have <strong class="text-brand">780</strong> vendors now</p>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row vendor-grid">
                    <div class="col-lg-6 col-md-6 col-12 col-sm-6"                     
                        v-for="data in store" :key="data.id">
                        <div class="vendor-wrap style-2 mb-40 vendor-height">
                            <div class="product-badges product-badges-position product-badges-mrg">
                                <span class="hot">Store</span>
                            </div>
                            <div class="vendor-img-action-wrap">
                                <div class="vendor-img">
                                    <a href="vendor-details-1.html">
                                        <img class="store-image" :src="'/assets/images/store/' + data.image" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="vendor-content-wrap">
                                <div class="mb-30">
                                    <div class="product-category">
                                        <span class="text-muted">Since 2012</span>
                                    </div>
                                    <h4 class="mb-5"><a href="vendor-details-1.html">{{ data.name }}</a></h4>
                                    <div class="vendor-info d-flex justify-content-between align-items-end mt-50">
                                        <ul class="contact-infor text-muted">
                                            <li><img src="/assets/images/theme/icons/icon-location.svg" alt="" /><span>{{ data.address }}</span></li>
                                            <li><img src="/assets/images/theme/icons/icon-contact.svg" alt="" /><span>{{ data.phone }}</span></li>
                                        </ul>
                                        <a :href="data.maps" class="btn btn-xs">Maps<i class="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination-area mt-20 mb-20">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-start">
                            <li class="page-item">
                                <a class="page-link" href="#"><i class="fi-rs-arrow-small-left"></i></a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link dot" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">6</a></li> -->
                            <li class="page-item">
                                <a class="page-link" href="#"><i class="fi-rs-arrow-small-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'StoreLocationView',
    data(){
        return{
            store: [
                {
                    id: 1,
                    name: 'Apotik Melawai Pakubuwono',
                    address: 'Jl. Pakubuwono VI No.6, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120',
                    phone: '0815-8412-4595',
                    image: 'melawai-pakubowono.jpg',
                    maps: 'https://www.google.com/local/place/fid/0x2e69f4465ff51efd:0xe723d57f06c37170/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DRb1j2ZvrpkqqhvgkY_3WvQ%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D224.89738%26pitch%3D0%26thumbfov%3D100&ik=CAISFlJiMWoyWnZycGtxcWh2Z2tZXzNXdlE%3D'
                },
                {
                    id: 2,
                    name: 'Apotik Melawai 2',
                    address: 'Jl. Salemba Raya No.57-59, Paseban, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10440',
                    phone: '0815-8412-4450',
                    image: 'melawai-2.jpg',
                    maps: 'https://www.google.com/local/place/fid/0x2e69f4465ff51efd:0xe723d57f06c37170/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DRb1j2ZvrpkqqhvgkY_3WvQ%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D224.89738%26pitch%3D0%26thumbfov%3D100&ik=CAISFlJiMWoyWnZycGtxcWh2Z2tZXzNXdlE%3D'
                },
                {
                    id: 3,
                    name: 'Apotik Melawai',
                    address: 'Jl. Kramat Raya No.148, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10450',
                    phone: '0815-8412-4420',
                    image: 'apotik-melawai.jpg',
                    maps: 'https://www.google.com/local/place/fid/0x2e69f4465ff51efd:0xe723d57f06c37170/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DRb1j2ZvrpkqqhvgkY_3WvQ%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D224.89738%26pitch%3D0%26thumbfov%3D100&ik=CAISFlJiMWoyWnZycGtxcWh2Z2tZXzNXdlE%3D'
                }
            ]
        }
    }
}
</script>

<style>
.store-image{
    width: 150px;
    height: 200px;
    object-fit: cover;
    object-position: center;
}

.vendor-height{
    height: 80%;
}

@media(max-width: 1200px){
    .vendor-height{
        height: 90%;
    }
}
</style>