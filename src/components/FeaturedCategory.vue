<template>
    <section class="popular-categories section-padding">
        <div class="container wow animate__animated animate__fadeIn">
            <div class="section-title">
                <div class="title">
                    <div class="d-flex flex-row">
                        <div class="page-clip"></div>
                        <h3>Featured Categories</h3>
                    </div>
                </div>

                <div class="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows">
                    <div class="view-btn"><router-link :to="{name: 'Category'}">View All</router-link></div>
                    <span class="slide-btn" @click="scrollLeft"><i class="fas fa-arrow-left"></i></span>
                    <span class="slide-btn" @click="scrollRight"><i class="fas fa-arrow-right"></i></span>
                </div>
            </div>

            <div class="carausel-10-columns-cover position-relative w-100" style="margin-top: -20px">
                <div class="d-flex flex-row flex-nowrap ctg-slider" id="category-slider">
                    <div class="card-2 animate__animated animate__fadeInUp ctg-box" data-wow-delay=".1s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/1.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Suplement</a></h6>
                        <span>26 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".2s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/2.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Generic</a></h6>
                        <span>28 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".3s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/3.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Soap</a></h6>
                        <span>14 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".4s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/4.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Immunity</a></h6>
                        <span>54 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".5s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/5.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Vaccine</a></h6>
                        <span>56 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".6s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/6.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Infusion</a></h6>
                        <span>72 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".7s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/7.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Gauze</a></h6>
                        <span>36 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".8s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/8.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Diarrhea</a></h6>
                        <span>123 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay=".9s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/9.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Fever</a></h6>
                        <span>34 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay="1s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/12.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Shampoo</a></h6>
                        <span>89 items</span>
                    </div>
                    <div class="card-2 wow animate__animated animate__fadeInUp ctg-box" data-wow-delay="0s">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="/category/1"><img src="assets/images/categories/11.png" alt="" /></a>
                        </figure>
                        <h6><a href="/category/1">Vitamin</a></h6>
                        <span>87 items</span>
                    </div>
                </div>
            </div>

            <div width="100vw" class="d-flex flex-row justify-content-center mb-3" style="margin-top: -7px;" v-if="view_show">
                <div class="view-btn">View all</div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeaturedCategoryVue',
    data(){
        return {
            screensize: 0,
            view_show: false,
        }
    },
    created(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods:{
        handleResize() {
            this.screensize = window.innerWidth;
            if(this.screensize < 767) this.view_show = true
            else this.view_show = false
        },
        scrollRight(){
            document.getElementById('category-slider').scrollLeft +=100;
        },
        scrollLeft(){
            document.getElementById('category-slider').scrollLeft -=100;
        },
    }
}
</script>

<style>
.ctg-slider{
    overflow-x: scroll;
    scroll-behavior: smooth;
}

.ctg-slider::-webkit-scrollbar {
    display: none;
}

.ctg-box{
    width: 250px;
    padding: 10px 30px;
    margin: 20px;
}

.view-btn{
    width: 100px;
    height: 30px;
    border: 1px solid #b3b3b3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin: 0 15px;
    color: #b22a2e;
    cursor: pointer;
}

.view-btn:hover{
    background-color: #b22a2e;
    color: #fff;
}

.slide-btn{
    width: 30px;
    height: 30px;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
    margin-right: 10px;
}

.slide-btn:hover{
    background-color: #b22a2e;
    color: #fff;
}
</style>