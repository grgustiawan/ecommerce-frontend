<template>
    <section class="popular-categories section-padding">
        <div class="container wow animate__animated animate__fadeIn">
            <div class="section-title">
                <div class="title">
                    <div class="d-flex flex-row">
                        <div class="page-clip"></div>
                        <h3>Top Brands</h3>
                    </div>
                </div>

                <div class="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows">
                    <div class="brandview-btn"><router-link :to="{name: 'Brand'}">View All</router-link></div>
                    <span class="slide-btn" @click="scrollLeft"><i class="fas fa-arrow-left"></i></span>
                    <span class="slide-btn" @click="scrollRight"><i class="fas fa-arrow-right"></i></span>
                </div>
            </div>

            <div class="carausel-10-columns-cover position-relative w-100" style="margin-top: -20px">
                <div class="d-flex flex-row flex-nowrap ctg-slider" id="brand-slider">
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".1s">
                        <figure class="img-hover-scale brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/kalbe-farma.png" alt="" /></a>
                        </figure>
                        <span>26 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".2s">
                        <figure class="img-hover-scale brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/merck.png" alt="" /></a>
                        </figure>
                        <span>28 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".3s">
                        <figure class="img-hover-scale brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/kimia-farma.png" alt="" /></a>
                        </figure>
                        <span>14 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".4s">
                        <figure class="img-hover-scale brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/astra-zaneca.png" alt="" /></a>
                        </figure>
                        <span>54 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".5s">
                        <figure class="img-hover-scale brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/gilead.png" alt="" /></a>
                        </figure>
                        <span>56 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".6s">
                        <figure class="img-hover-scale brand-img-wrap brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/sanofi.png" alt="" /></a>
                        </figure>
                        <span>72 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".7s">
                        <figure class="img-hover-scale brand-img-wrap">
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/novartis.png" alt="" /></a>
                        </figure>
                        <span>36 items</span>
                    </div>
                    <div class="wow animate__animated animate__fadeInUp brand-box" data-wow-delay=".8s">
                        <figure class="img-hover-scale brand-img-wrap" >
                            <a href="shop-grid-right.html"><img class="brand-img" src="assets/images/brands/biofarma.png" alt="" /></a>
                        </figure>
                        <span>123 items</span>
                    </div>
                </div>
            </div>

            <div width="100vw" class="d-flex flex-row justify-content-center mb-3" style="margin-top: 7px;" v-if="view_show">
                <div class="brandview-btn">View all</div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'TopBrandVue',
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
            document.getElementById('brand-slider').scrollLeft +=150;
        },
        scrollLeft(){
            document.getElementById('brand-slider').scrollLeft -=150;
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
    scroll-behavior: smooth;
}

.brand-box{
    width: 350px;
    height: 300px;
    padding: 0 20px;
    margin: 5px;
    border: 1px solid #b3b3b3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s ease;
}

.brand-box:hover{
    border: 1px solid #b22a2e;
    transform: scale(1.03);
}

.brand-box span{
    margin-top: 20px;
}

.brand-img{
    width: 250px;
    object-fit: contain;
}

.brand-img-wrap{
    width: 250px;
    position: relative;
    top: 20%;
    -webkit-transform: translateY(-50%); 
            transform: translateY(-50%);
}

.brandview-btn{
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

.brandview-btn:hover{
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