<template>
    <main class="main">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Shop <span></span> Fillter
                </div>
            </div>
        </div>
        <div class="container mb-30 mt-50">
            <div class="row">
                <div class="col-xl-10 col-lg-12 m-auto">
                    <div class="mb-50">
                        <h1 class="heading-2 mb-10">Your Wishlist</h1>
                        <h6 class="text-body">There are <span class="text-brand">{{ wishlist.length }}</span> products in this list</h6>
                    </div>
                    <div class="table-responsive shopping-summery">
                        <table class="table table-wishlist">
                            <thead>
                                <tr class="main-heading">
                                    <th class="custome-checkbox start pl-30">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                                        <label class="form-check-label" for="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colspan="2">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock Status</th>
                                    <th scope="col">Action</th>
                                    <th scope="col" class="end">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="pt-30" v-for="wish in wishlist" :key="wish.id">
                                    <td class="custome-checkbox pl-30">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                        <label class="form-check-label" for="exampleCheckbox1"></label>
                                    </td>
                                    <td class="image product-thumbnail pt-40"><img :src="getProductImg(wish.images)" :alt="wish.images" /></td>
                                    <td class="product-des product-name">
                                        <h6><a class="product-name mb-10" href="shop-product-right.html">{{ wish.name }}</a></h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" :style="{width: wish.rating +'%'}"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"></span>
                                        </div>
                                    </td>
                                    <td class="price" data-title="Price">
                                        <h3 class="text-brand" style="font-size: 13pt;">Rp.{{ formatPrice(wish.price) }}</h3>
                                    </td>
                                    <td class="text-center detail-info" data-title="Stock">
                                        <span class="stock-status in-stock mb-0"> {{ wish.status }} </span>
                                    </td>
                                    <td class="text-right" data-title="Cart">
                                        <button class="btn btn-sm">Add to cart</button>
                                    </td>
                                    <td class="action text-center" data-title="Remove">
                                        <a href="#" class="text-body"><i class="fi-rs-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'WishlistView',
    data(){
        return {
            wishlist: [
                {id: 1, name: 'Garnier Men Acno Fight', images: 'garnier-acno-fight-1.jpg', price: 33500, status: 'instock', rating: 90},
                {id: 2, name: 'Detol Hand Wash', images: 'detol-hand-wash-1.jpg', price: 40000, status: 'instock', rating: 70},
                {id: 3, name: 'Woods Herbal', images: 'woods-herbal-1.jpg', price: 29000, status: 'instock', rating: 80},
                {id: 4, name: 'Enervon-C 100 Tablet', images: 'enervonc-1.jpg', price: 114500, status: 'instock', rating: 78},
                {id: 5, name: 'SK-II SkinPower Cream', images: 'sk-ii-skinpower-1.jpg', price: 2900000, status: 'instock', rating: 95},
                {id: 6, name: 'Garnier Micellar Water', images: 'garnier-micellar-water-1.jpg', price: 39000, status: 'instock', rating: 95},
            ]
        }
    },
    methods: {
        getProductImg(filename){
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