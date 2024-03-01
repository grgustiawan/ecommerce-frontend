<template>
    <main class="main">
        <div class="page-header mt-30 mb-75">
            <div class="container">
                <div class="archive-header">
                    <div class="row align-items-center">
                        <div class="col-xl-3">
                            <h1 class="mb-15">Categories</h1>
                            <div class="breadcrumb">
                                <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                                <span></span> Categories
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content mb-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shop-product-fillter mb-50">
                            <div class="totall-product">
                                <div class="d-flex flex-row">
                                    <div class="page-clip"></div>
                                    <h3>All Categories</h3>
                                </div>
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
                                            <span><i class="fi-rs-apps-sort"></i>Sort:</span>
                                        </div>
                                        <div class="sort-by-dropdown-wrap">
                                            <span>Featured <i class="fi-rs-angle-small-down"></i></span>
                                        </div>
                                    </div>
                                    <div class="sort-by-dropdown">
                                        <ul>
                                            <li><a class="active" href="#">Featured</a></li>
                                            <li><a href="#">Newest</a></li>
                                            <li><a href="#">Most comments</a></li>
                                            <li><a href="#">Release Date</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="loop-grid">
                            <div class="row">
                                <article class="col-xl-3 col-lg-4 col-md-6 text-center hover-up mb-30 animated" v-for="ctg in categories" :key="ctg.id">
                                    <div class="post-thumb">
                                        <a href="blog-post-right.html">
                                            <img style="border-radius: 3px;border: 1px solid #eeeeee" :src="getCategoryImg(ctg.images)" alt="" />
                                        </a>
                                        <div class="entry-meta">
                                            <a class="entry-meta meta-2" href="blog-category-grid.html"><i class="fi-rs-heart"></i></a>
                                        </div>
                                    </div>
                                    <div class="entry-content-2">
                                        <h4 class="post-title mb-15">
                                            <a href="blog-post-right.html">{{ ctg.name }}</a>
                                        </h4>
                                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                                            <div>
                                                <span class="hit-count">{{ ctg.product }} Product</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="pagination-area mt-15 mb-sm-5 mb-lg-0">
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
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'CategoryView',
    data(){
        return {
            categories: [
                {id: 1, name: 'Supplement', images: '1.png', product: 309},
                {id: 2, name: 'Generic', images: '2.png', product: 180},
                {id: 3, name: 'Hand Wash', images: '3.png', product: 288},
                {id: 4, name: 'Immunity', images: '4.png', product: 115},
                {id: 5, name: 'Vaccine', images: '5.png', product: 201},
                {id: 6, name: 'Infusion', images: '6.png', product: 100},
                {id: 7, name: 'Gauze', images: '7.png', product: 241},
                {id: 8, name: 'Diarrhea', images: '8.png', product: 139},
                {id: 9, name: 'Fever', images: '9.png', product: 236},
                {id: 10, name: 'Masker', images: '10.png', product: 111},
                {id: 11, name: 'Vitamin', images: '11.png', product: 77},
                {id: 12, name: 'Shampoo', images: '12.png', product: 165},
            ]
        }
    },
    methods: {
        getCategoryImg(filename){
            return '/assets/images/categories/' + filename;
        }
    }
}
</script>

<style>

</style>