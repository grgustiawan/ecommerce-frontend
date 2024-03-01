<template>
    <header class="header-area header-style-1 header-height-2">
        <div class="header-bottom header-bottom-bg-color sticky-bar">
            <div class="container">
                <div class="header-wrap" v-show="screensize > 960" style="margin-top: 20px;">
                    <div class="logo logo-width-1">
                        <router-link :to="{name: 'Home'}"><img src="/assets/images/theme/logo.png" alt="logo" /></router-link>
                    </div>
                    <div class="header-right">
                        <!-- <div class="search-style-2" style="width: 60%;">
                            <form action="#" style="width: 100%;">
                                <select class="select-active">
                                    <option>All Items</option>
                                    <option>Category</option>
                                    <option>Product</option>
                                    <option>Brand</option>
                                    <option>Tag</option>
                                </select>
                                <input type="text" placeholder="Search for items..." />
                            </form>
                        </div> -->
                        
                        <div class="w-100">
                            <div class="search-bar" :class="{'isactive' : searchFocus}">
                                <input type="text" style="width: 75%;height: 40px;border-radius: 0;border: none;" 
                                       placeholder="Search for product" 
                                       @focus="searchFocus = true" 
                                       @blur="searchFocus = false">
                                <div class="search-right">
                                    <div style="width:75%;height: 100%;">
                                        <div class="dropdown-search-wrapper">
                                            <div class="dropbtn">
                                               <span>{{ selectedFilter }}</span>
                                               <i class="fas fa-caret-down"></i>
                                            </div>
                                            <div class="dropdown-search">
                                                <a href="#" @click="getSearchFilter($event)">Categories</a>
                                                <a href="#" @click="getSearchFilter($event)">Products</a>
                                                <a href="#" @click="getSearchFilter($event)">Brands</a>
                                                <a href="#" @click="getSearchFilter($event)">Tags</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="width:25%;height: 100%;padding: 2px;">
                                        <div class="search-button">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/osbjlbsb.json"
                                                trigger="hover"
                                                colors="outline:#ffffff,secondary:#f4f4f4,secondary2:#ffffff,quaternary:#b22a2e"
                                                stroke="100"
                                                style="width:30px;height:30px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="position: relative;" v-show="searchFocus">
                                <div style="position: absolute;
                                        top: -6px;
                                        width: 100%;
                                        height: 400px;
                                        background-color: #fff;
                                        border: 1px solid #b3b3b3;
                                        z-index: 1000;
                                        box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);">
                                        <div>
                                            <div style="width: 100%;
                                                        padding: 5px;
                                                        background-color: #f3f3f3;
                                                        display: flex;
                                                        flex-direction: row;
                                                        justify-content: start;">
                                                <div style="position: relative;
                                                            width: 10px;
                                                            height: 20px;
                                                            background-color: #b22a2e;
                                                            margin-left: -5px;
                                                            border-top-right-radius: 30px;
                                                            border-bottom-right-radius: 30px;"></div>
                                                <span style="margin-left: 10px; font-weight: 400;">Category Suggestions</span>
                                            </div>
                                            <div style="width: 100%;padding: 5px 20px;margin-bottom: 20px;">
                                                <span>Multivitamin</span>
                                            </div>

                                            <div style="width: 100%;
                                                        padding: 5px 5px;
                                                        background-color: #f3f3f3;
                                                        display: flex;
                                                        flex-direction: row;
                                                        justify-content: start;">
                                                <div style="position: relative;
                                                            width: 10px;
                                                            height: 20px;
                                                            background-color: #b22a2e;
                                                            margin-left: -5px;
                                                            border-top-right-radius: 30px;
                                                            border-bottom-right-radius: 30px;"></div>
                                                <span style="margin-left: 10px;font-weight: 400;">Products Suggestions</span>
                                            </div>
                                            <div style="cursor: pointer;">
                                                <div style="width: 100%;padding: 5px 20px;display: flex;flex-direction: column;margin-top: 5px;">
                                                    <div style="width: 100%;display: flex;flex-direction: row;padding: 0;">
                                                        <div style="width: 50px;height: 50px;padding: 2px;">
                                                            <img style="width: 100%;object-fit: contain;" src="/assets/images/shop/blackmores1.png" alt="">
                                                        </div>
                                                        <div style="margin-left: 20px;display: flex;flex-direction: column;">
                                                            <span style="font-size: 13pt;font-weight: bolder;">Blackmores Multivitamin +Mineral</span>
                                                            <span style="font-size: 12pt;">IDR 230,000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr style="margin-top: 0">
                                            </div>
                                        </div>

                                        <div style="position: absolute;bottom: -1px;width: 100%;height: 3px;background-color: #b22a2e;"></div>
                                </div>
                            </div>
                        </div>

                        <div class="header-action-right" style="width: 40%;">
                            <div class="header-action-2">
                                <!-- <div class="header-action-icon-2">
                                    <a href="shop-compare.html">
                                        <img class="svgInject" alt="Nest" src="/assets/images/theme/icons/icon-compare.svg" />
                                        <span class="pro-count blue">3</span>
                                    </a>
                                    <a href="shop-compare.html"><span class="lable ml-0">Compare</span></a>
                                </div> -->
                                <div class="header-action-icon-2">
                                    <a href="shop-wishlist.html">
                                        <img class="svgInject" alt="Nest" src="/assets/images/theme/icons/icon-heart.svg" />
                                        <span class="pro-count blue">6</span>
                                    </a>
                                    <router-link :to="{name: 'Wishlist'}"><span class="lable">Wishlist</span></router-link>
                                </div>
                                <div class="header-action-icon-2">
                                    <a class="mini-cart-icon" href="shop-cart.html">
                                        <img alt="Nest" src="/assets/images/theme/icons/icon-cart.svg" />
                                        <span class="pro-count blue">2</span>
                                    </a>
                                    <router-link :to="{name: 'Cart'}"><span class="lable">Cart</span></router-link>
                                    <div class="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div class="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest" src="/assets/images/products/adalat-oros-1.jpg" /></a>
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Adalat Oros 30mg</a></h4>
                                                    <h4><span>1 × </span>Rp. 77,000</h4>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <a href="#"><i class="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest" src="/assets/images/products/alloris-1.jpg" /></a>
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Alloris 10mg TAB</a></h4>
                                                    <h4><span>1 × </span>Rp. 50,000</h4>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <a href="#"><i class="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="shopping-cart-footer">
                                            <div class="shopping-cart-total">
                                                <h4>Total <span>Rp. 127,000</span></h4>
                                            </div>
                                            <div class="shopping-cart-button" style="width: 100%;">
                                                <router-link :to="{name: 'Cart'}">View cart</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-action-icon-2">
                                    <a href="page-account.html">
                                        <img class="svgInject" alt="Nest" src="/assets/images/theme/icons/icon-user.svg" />
                                    </a>
                                    <a><span class="lable ml-0">Account</span></a>
                                    <div class="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                        <ul v-show="isLogin">
                                            <li>
                                                <a href="page-account.html"><i class="fi fi-rs-user mr-10"></i>My Account</a>
                                            </li>
                                            <li>
                                                <a href="page-account.html"><i class="fi fi-rs-location-alt mr-10"></i>Order Tracking</a>
                                            </li>
                                            <li>
                                                <a href="page-account.html"><i class="fi fi-rs-label mr-10"></i>My Voucher</a>
                                            </li>
                                            <li>
                                                <a href="shop-wishlist.html"><i class="fi fi-rs-heart mr-10"></i>My Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="page-account.html"><i class="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                                            </li>
                                            <li>
                                                <a href="page-login.html"><i class="fi fi-rs-sign-out mr-10"></i>Sign out</a>
                                            </li>
                                        </ul>
                                        <ul v-show="!isLogin">
                                            <li>
                                                <router-link :to="{name: 'Login'}"><i class="fi fi-rs-user mr-10"></i>Login</router-link>
                                            </li>
                                            <!-- <li>
                                                <router-link :to="{name: 'Register'}"><i class="fi fi-rs-user mr-10"></i>Register</router-link>
                                            </li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-wrap header-space-between position-relative">
                    <div class="logo logo-width-1 d-block d-lg-none">
                        <a href="index.html"><img src="/assets/images/theme/logo.png" alt="logo" /></a>
                    </div>
                    <div class="header-nav d-none d-lg-flex">
                        <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul style="margin-left: 25px">
                                    <li class="hot-deals">
                                        <!-- place icon here -->
                                        <a href="/" :class="{'active': this.$route.name === 'Home'}">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/store" :class="{'active': this.$route.name === 'Store'}">
                                            Store
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/location" :class="{'active': this.$route.name === 'Location'}">
                                            Store Location
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-grid-right.html">Marketplace <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="shop-grid-right.html">Shopee</a></li>
                                            <li><a href="shop-grid-right.html">Tokopedia</a></li>
                                            <li><a href="shop-grid-right.html">Blibli</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Services <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="vendors-grid.html">Self-Pickup</a></li>
                                            <li><a href="vendors-list.html">Online Consultation</a></li>
                                        </ul>
                                    </li>
                                    <li class="position-static">
                                        <a href="#">Promotion <i class="fi-rs-angle-down"></i></a>
                                        <ul class="mega-menu">
                                            <li class="sub-mega-menu sub-mega-menu-width-22">
                                                <a class="menu-title" href="#">Multivitamin</a>
                                                <ul>
                                                    <li><a href="shop-product-right.html">Blackmores</a></li>
                                                    <li><a href="shop-product-right.html">Natures Way</a></li>
                                                    <li><a href="shop-product-right.html">Herbs & Seasonings</a></li>
                                                    <li><a href="shop-product-right.html">Cuts & Sprouts</a></li>
                                                    <li><a href="shop-product-right.html">Exotic Fruits & Veggies</a></li>
                                                    <li><a href="shop-product-right.html">Packaged Produce</a></li>
                                                </ul>
                                            </li>
                                            <li class="sub-mega-menu sub-mega-menu-width-22">
                                                <a class="menu-title" href="#">Skin Recovery</a>
                                                <ul>
                                                    <li><a href="shop-product-right.html">Dermatix</a></li>
                                                    <li><a href="shop-product-right.html">Butter and Margarine</a></li>
                                                    <li><a href="shop-product-right.html">Eggs Substitutes</a></li>
                                                    <li><a href="shop-product-right.html">Marmalades</a></li>
                                                    <li><a href="shop-product-right.html">Sour Cream</a></li>
                                                    <li><a href="shop-product-right.html">Cheese</a></li>
                                                </ul>
                                            </li>
                                            <li class="sub-mega-menu sub-mega-menu-width-22">
                                                <a class="menu-title" href="#">Daily Needs</a>
                                                <ul>
                                                    <li><a href="shop-product-right.html">Shampoo</a></li>
                                                    <li><a href="shop-product-right.html">Conditioner</a></li>
                                                    <li><a href="shop-product-right.html">Chicken</a></li>
                                                    <li><a href="shop-product-right.html">Sliced Deli Meat</a></li>
                                                    <li><a href="shop-product-right.html">Wild Caught Fillets</a></li>
                                                    <li><a href="shop-product-right.html">Crab and Shellfish</a></li>
                                                </ul>
                                            </li>
                                            <li class="sub-mega-menu sub-mega-menu-width-34">
                                                <div class="menu-banner-wrap">
                                                    <a href="shop-product-right.html"><img src="/assets/images/banner/banner-menu.png" alt="Nest" /></a>
                                                    <div class="menu-banner-content">
                                                        <h4 style="color: #fff">Hot deals</h4>
                                                        <h3 style="color: #fff">
                                                            Don't miss<br />
                                                            Trending
                                                        </h3>
                                                        <div class="menu-banner-price">
                                                            <span class="new-price text-white">Save to 50%</span>
                                                        </div>
                                                        <div class="menu-banner-btn">
                                                            <a href="shop-product-right.html">Shop now</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-banner-discount">
                                                        <h3>
                                                            <span>25%</span>
                                                            off
                                                        </h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a :class="{'active': this.$route.name === 'Articles' || 
                                            this.$route.name === 'Encyclopedias' || 
                                            this.$route.name === 'PurchaseGuide' || 
                                            this.$route.name === 'PrivacyPolicy' || 
                                            this.$route.name === 'TermsOfServices'}">
                                            Blog <i class="fi-rs-angle-down"></i>
                                        </a>
                                        <ul class="sub-menu">
                                            <li><a href="/articles" :class="{'active': this.$route.name === 'Articles'}">Latest News</a></li>
                                            <li><a href="/encyclopedias" :class="{'active': this.$route.name === 'Encyclopedias'}">Drug Encyclopedia</a></li>
                                            <li><a href="/purchase-guide" :class="{'active': this.$route.name === 'PurchaseGuide'}">Purchase Guide</a></li>
                                            <li><a href="/privacy-policy" :class="{'active': this.$route.name === 'PrivacyPolicy'}">Privacy Policy</a></li>
                                            <li><a href="/terms-of-services" :class="{'active': this.$route.name === 'TermsOfServices'}">Terms of Services</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/contact" :class="{'active': this.$route.name === 'Contact'}">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="hotline d-none d-lg-flex">
                        <img src="/assets/images/theme/icons/icon-headphone.svg" alt="hotline" />
                        <p>021 - 77212135<span>24/7 Support Center</span></p>
                    </div>
                    <div class="header-action-icon-2 d-block d-lg-none">
                        <div class="burger-icon burger-icon-white" @click="showMobile">
                            <span class="burger-icon-top"></span>
                            <span class="burger-icon-mid"></span>
                            <span class="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div class="header-action-right d-block d-lg-none">
                        <div class="header-action-2">
                            <div class="header-action-icon-2">
                                <a href="shop-wishlist.html">
                                    <img alt="Nest" src="/assets/images/theme/icons/icon-heart.svg" />
                                    <span class="pro-count white">4</span>
                                </a>
                            </div>
                            <div class="header-action-icon-2">
                                <a class="mini-cart-icon" href="#">
                                    <img alt="Nest" src="/assets/images/theme/icons/icon-cart.svg" />
                                    <span class="pro-count white">2</span>
                                </a>
                                <div class="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                        <li>
                                            <div class="shopping-cart-img">
                                                <a href="shop-product-right.html"><img alt="Nest" src="/assets/images/shop/thumbnail-3.jpg" /></a>
                                            </div>
                                            <div class="shopping-cart-title">
                                                <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                                                <h3><span>1 × </span>$800.00</h3>
                                            </div>
                                            <div class="shopping-cart-delete">
                                                <a href="#"><i class="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="shopping-cart-img">
                                                <a href="shop-product-right.html"><img alt="Nest" src="/assets/images/shop/thumbnail-4.jpg" /></a>
                                            </div>
                                            <div class="shopping-cart-title">
                                                <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                                                <h3><span>1 × </span>$3500.00</h3>
                                            </div>
                                            <div class="shopping-cart-delete">
                                                <a href="#"><i class="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="shopping-cart-footer">
                                        <div class="shopping-cart-total">
                                            <h4>Total <span>$383.00</span></h4>
                                        </div>
                                        <div class="shopping-cart-button">
                                            <a href="shop-cart.html">View cart</a>
                                            <a href="shop-checkout.html">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="mobile-menu-wrapper" v-show="showMenu" :class="{'mobile-wrapper-out' : isHide}">
        <div class="mobile-menus" :class="{'mobile-menu-out' : isHide}">
        <div style="width: 100%;padding: 5px 20px;">
            <div style="width: 100%;display: flex;justify-content: space-between;border-bottom: 1px solid #e3e3e3;">
                <div style="width: 80%;padding: 10px 20px; padding-left: 0;">
                    <a href="/"><img style="width: 150px" src="/assets/images/theme/logo.png" alt="logo" /></a>
                </div>
                <div class="mobile-menu-close close-style-wrap close-style-position-inherit" @click="hideMobile">
                    <button class="close-style search-close">
                        <i class="icon-top"></i>
                        <i class="icon-bottom"></i>
                    </button>
                </div>
            </div>

            <div style="width: 100%;margin-top: 20px">
                <div class="mobile-search search-style-3 mobile-header-border">
                    <form action="#">
                        <input type="text" placeholder="Search for items…" />
                        <button type="submit"><i class="fi-rs-search"></i></button>
                    </form>
                </div>
                <div class="mobile-menu-wrap mobile-header-border">
                    <!-- mobile menu start -->
                    <div class="dropdown">
                        <a href="" class="dropdown-btn">
                            <span>Home</span>
                        </a>
                        <hr style="margin-top: -2px">

                        <button class="dropdown-btn mt-2" 
                                id="companyArrow" 
                                aria-haspopup="company" 
                                @click="isCompanyActive" 
                                @focusout="companyActive = false">
                            <span>Company</span>
                            <span class="arrow"></span>
                        </button>
                        <ul class="dropdown-content" role="company" v-show="companyActive">
                            <li style="--delay: 1;"><a href="#">Profile</a></li>
                            <li style="--delay: 2;"><a href="#">Event</a></li>
                            <li style="--delay: 3;"><a href="#">Carrer</a></li>
                        </ul>
                        <hr style="margin-top: -2px">

                        <a href="" class="dropdown-btn mt-2">
                            <span>Store Location</span>
                        </a>
                        <hr style="margin-top: -2px">

                        <a href="" class="dropdown-btn mt-2">
                            <span>Special Offer</span>
                        </a>
                        <hr style="margin-top: -2px">

                        <button class="dropdown-btn mt-2" 
                                id="shopArrow" 
                                aria-haspopup="shop" 
                                @click="isShopActive"
                                @focusout="shopActive = false">
                            <span>Shop</span>
                            <span class="arrow"></span>
                        </button>
                        <ul class="dropdown-content" role="shop" v-show="shopActive">
                            <li style="--delay: 1;"><a href="#">Online Store</a></li>
                            <li style="--delay: 2;"><a href="#">Shopee</a></li>
                            <li style="--delay: 3;"><a href="#">TokoPedia</a></li>
                        </ul>
                        <hr style="margin-top: -2px">

                        <a href="" class="dropdown-btn mt-2">
                            <span>Log In / Sign Up</span>
                        </a>
                        <hr style="margin-top: -2px">

                    </div>
                    <!-- mobile menu end -->
                </div>

                <div class="mobile-social-icon mb-50">
                    <h6 class="mb-15">Follow Us</h6>
                    <a href="#"><img src="/assets/images/theme/icons/icon-facebook-white.svg" alt="" /></a>
                    <a href="#"><img src="/assets/images/theme/icons/icon-twitter-white.svg" alt="" /></a>
                    <a href="#"><img src="/assets/images/theme/icons/icon-instagram-white.svg" alt="" /></a>
                    <a href="#"><img src="/assets/images/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                    <a href="#"><img src="/assets/images/theme/icons/icon-youtube-white.svg" alt="" /></a>
                </div>
                <div class="site-copyright">Copyright 2023 © ApotikMelawai. All rights reserved.</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarVue',
    data(){
        return {
            screensize: 0,
            screenheight: 0,
            showMenu: false,
            isHide: false,
            companyActive: false,
            shopActive: false,
            selectedFilter: 'Products',
            searchFocus: false,
            isLogin: false,
        }
    },
    created(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.screensize = window.innerWidth;
            this.screenheight = window.innerHeight;
        },
        showMobile(){
            this.isHide = false;
            this.showMenu = true;
        },
        hideMobile(){
            this.isHide = true;
            setTimeout(() => {
                this.showMenu = false;
            }, 450);
        },
        isCompanyActive(){
            if(this.companyActive === false) this.companyActive = true;
            else {this.companyActive = false; document.getElementById("companyArrow").blur();}
        },
        isShopActive(){
            if(this.shopActive === false) this.shopActive = true;
            else {this.shopActive = false; document.getElementById("shopArrow").blur();}
        },
        getSearchFilter(event){
            const clickedFilter = event.target;
            const classes = clickedFilter.innerText;
            this.selectedFilter = classes;
        }
    },
}
</script>

<style>
.hot-offers{
    position: absolute;
    left: -30px;
    bottom: 25px;
}

.mobile-menu-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000009c;
    z-index: 999;
}

.mobile-wrapper-out{
    animation: fadeOut .5s ease;
}

@keyframes fadeOut{
    0% {opacity: 1;}
    100% {opacity: 0;}
}

.mobile-menus{
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
    animation: slideIn .5s ease;
}

.mobile-menu-out{
    animation: slideOut .4s ease;
}

@keyframes slideIn {
    0% {transform: translateX(-100%)}
    100% {transform: translateX(0)}
}

@keyframes slideOut {
    0% {transform: translateX(0)}
    100% {transform: translateX(-100%)}
}

.dropdown {
  max-width: 100%;
  position: relative;
  width: 100%;
}

.dropdown-btn {
  background: #ffffff;
  font-size: 18px;
  width: 100%;
  border: none;
  color: #646464;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7em 0.5em;
  cursor: pointer;
  font-weight: 400;
}

.arrow {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #646464;
  transition: transform ease-in-out 0.3s;
}

.dropdown-content {
  list-style: none;
  position: relative;
  width: 100%;
  visibility: hidden;
  overflow: hidden;
}

.dropdown-content li {
  background: #ffffff;
  border-bottom: 1px solid #cfcfcf;
  color: #646464;
  position: relative;
  left: 100%;
  transition: 0.5s;
  transition-delay: calc(60ms * var(--delay));
}

.dropdown-btn:focus + .dropdown-content li {
  left: 0;
}

.dropdown-btn:focus + .dropdown-content {
  visibility: visible;
}

.dropdown-btn:focus > .arrow {
  transform: rotate(180deg);
}

.rotateBack{
  transform: rotate(0deg);
}

.dropdown-content li:hover {
  background: #1d1f24;
}

.dropdown-content li a {
  display: block;
  padding: 0.7em 0.5em;
  color: #909090;
  margin: 0.1em 0;
  text-decoration: none;
  font-weight: 400;
}

/* Search Box */
.search-bar{
    position: relative;
    top: -6px;
    width: 100%;
    height: 50px;
    border: 1px solid #b3b3b3;
    border-radius: 0;
    display: flex;
    flex-direction: row;
}

.isactive{
    border: 1px solid #b22a2e;
}

.search-right{
    width: 25%;
    display: flex;
    flex-direction: row;
}

.search-button{
    width: 100%;
    height: 100%;
    background-color: #b22a2e;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    transition-duration: .5s;
}

.search-button:hover{
    background-color: #7e0106;
}

/* Style The Dropdown Searchbar */
.dropdown-search-wrapper {
  width: 100%;
  position: relative;
  padding:2px;
}

.dropbtn {
  width: 100%;
  height: 44px;
  background-color: #ffffff;
  border-left: 1px solid #d6d6d6;
  color: #515151;
  font-size: 16px;
  font-weight: 600;
  border-left: 1px solid #d6d6d6;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dropdown-search {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 200;
}

.dropdown-search a {
  color: black;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-search a:hover {background-color: #ffd1d1}

.dropdown-search-wrapper:hover .dropdown-search {
  display: block;
}

.dropdown-search-wrapper:hover .dropbtn {
  background-color: #b22a2e;
  color: #fff;
}

/* Searchbar Results */
.search-results{
	position: absolute;
	top: -6px;
	width: 100%;
	height: 400px;
	background-color: #fff;
	border: 1px solid #b3b3b3;
	z-index: 100;
	box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.category-sgs-wrapper{
	width: 100%;
	padding: 5px;
	background-color: #f3f3f3;
	display: flex;
	flex-direction: row;
	justify-content: start;
}

.sgs-clip{
	position: relative;
	width: 10px;
	height: 20px;
	background-color: #b22a2e;
	margin-left: -5px;
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}

.sgs-title{
	margin-left: 10px; 
	font-weight: 400;
}

.category-sgs-wrapper .sgs-items{
	width: 100%;
	padding: 5px 20px;
	margin-bottom: 20px;
}

.product-sgs-wrapper{
	width: 100%;
	padding: 5px 5px;
	background-color: #f3f3f3;
	display: flex;
	flex-direction: row;
	justify-content: start;
}


.product-sgs-wrapper .sgs-items{
	width: 100%;
	padding: 5px 20px;
	display: flex;
	flex-direction: column;
	margin-top: 5px;
}

.product-sgs-wrapper .sgs-items .sgs-product{
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 0;
}

.product-sgs-wrapper .sgs-items .sgs-product .sgs-image-wrapper{
	width: 50px;
	height: 50px;
	padding: 2px;
}

.product-sgs-wrapper .sgs-items .sgs-product .sgs-image-wrapper .sgs-image{
	width: 100%;
	object-fit: contain;
}

.product-sgs-wrapper .sgs-items .sgs-product .sgs-product-wrapper{
	margin-left: 20px;
	display: flex;
	flex-direction: column;
}

.product-sgs-wrapper .sgs-items .sgs-product .sgs-product-wrapper .sgs-product-name{
	font-size: 13pt;
	font-weight: bolder;
}

.product-sgs-wrapper .sgs-items .sgs-product .sgs-product-wrapper .sgs-product-price{
	font-size: 12pt;
}
</style>