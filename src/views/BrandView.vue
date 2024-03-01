<template>
 <main class="main pages mb-80">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Brand List
                </div>
            </div>
        </div>
        <div class="page-content pt-50">
            <div class="container">
                <div class="archive-header-2 text-center">
                    <h1 class="display-2 mb-50">Brand List</h1>
                    <div class="row">
                        <div class="col-lg-5 mx-auto">
                            <div class="sidebar-widget-2 widget_search mb-50">
                                <div class="search-form">
                                    <form>
                                        <input type="text" placeholder="Search brand by name..." />
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
                                <p>We have <strong class="text-brand">780</strong> brands now</p>
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
                                            <li><a class="active" href="#">Mall</a></li>
                                            <li><a href="#">Featured</a></li>
                                            <li><a href="#">Preferred</a></li>
                                            <li><a href="#">Total items</a></li>
                                            <li><a href="#">Avg. Rating</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row vendor-grid">    
                    <div class="col-lg-6 col-md-6 col-12 col-sm-6" v-for="brn in brands" :key="brn.id">
                        <div class="vendor-wrap style-2 mb-40" style="min-height: 300px;position: relative;">                
                            <div class="vendor-img-action-wrap" style="position: relative;">
                                <div class="vendor-img" style="margin-top: 50px;">
                                    <a href="vendor-details-1.html">
                                        <img class="default-img" :src="getBrandImg(brn.images)" alt="" />
                                    </a>
                                </div>
                                <div class="mt-10">
                                    <span class="font-small total-product">{{ brn.total_product }} products</span>
                                </div>
                            </div>
                            <div class="vendor-content-wrap">
                                <div class="mb-30">
                                    <div class="product-category">
                                        <span class="text-muted">Since 2012</span>
                                    </div>
                                    <h4 class="mb-5"><a href="vendor-details-1.html">{{ brn.name }}</a></h4>
                                    <div class="vendor-info d-flex justify-content-between align-items-end mt-30">
                                        <ul class="contact-infor text-muted">
                                            <li><span>{{ brn.description }}</span></li>
                                        </ul>
                                        
                                        <div style="position: absolute;bottom: 0;right:0;">
                                            <a href="vendor-details-1.html" class="btn btn-xs" 
                                               style="padding: 15px;
                                                      border-radius: 0;
                                                      border-bottom-right-radius: 3px;
                                                      border-top-left-radius: 5px;">
                                                      View Detail <i class="fi-rs-arrow-small-right"></i>
                                            </a>
                                        </div>
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
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active"><a class="page-link" href="#">2</a></li>
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
    </main> 
</template>

<script>
export default {
    name: 'BrandView',
    data(){
        return { 
            brands: [
                {
                    id: 1, 
                    name: 'Garnier', 
                    images: 'garnier.png',
                    total_product: 103,
                    description: "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs of women everywhere in the world, we offer innovative, affordable care solutions.",
                },
                {
                    id: 2, 
                    name: 'Blackmores', 
                    images: 'blackmores.png', 
                    total_product: 62,
                    description: "Blackmores is Australia's leading natural health company. Our quality range of vitamin, minerals, herbal and nutritional supplements, and continued support of the community and environment, are among the many reasons Blackmores is the most trusted name in natural health.",
                },
                {
                    id: 3, 
                    name: "Pond's", 
                    images: 'ponds.png', 
                    total_product: 90,
                    description: "Pond's is an American brand of beauty and health care products, currently owned by Unilever.",
                },
                {
                    id: 4, 
                    name: "Detol", 
                    images: 'detol.png', 
                    total_product: 87,
                    description: "Dettol is a cleaning disinfectant and antiseptic. It was introduced in 1932 by the British company Reckitt. In Germany, it is sold under the name Sagrotan.",
                },
                {
                    id: 5, 
                    name: "Antis", 
                    images: 'antis.png', 
                    total_product: 31,                    
                    description: "Antis is a pioneer of hand sanitizers in Indonesia, both in the form of gel and spray, which are proven to be the most effective in killing germs (Diarrhoea, Typhus, Salmonella, E. Coli, Flu) according to WHO standards and are clinically tested and practically use anywhere and anytime.",
                }
            ]
        }
    }, 
    methods: {
        getBrandImg(filename){
            return  '/assets/images/brands/' + filename;
        }
    }
}
</script>

<style>

</style>