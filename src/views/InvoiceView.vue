<template>
    <div class="invoice invoice-content invoice-2">
        <div class="back-top-home hover-up mt-30 ml-30">
            <router-link class="hover-up" :to="{name: 'Account'}"><i class="fi-rs-home mr-5"></i> Account</router-link>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="invoice-inner">
                        <div class="invoice-info" id="invoice_wrapper">
                            <div class="invoice-header">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="invoice-numb">
                                            <h4 class="invoice-header-1 mb-10 mt-20">Invoice No: <span class="text-brand">#INV/VIII/476/SKU222</span></h4>
                                            <h6 class="">Date: 11 August 2023</h6>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="invoice-name text-end">
                                            <div class="logo">
                                                <a href="index.html"><img style="width: 250px" src="/assets/images/theme/logo.png" alt="logo" /></a>
                                                <p class="text-sm text-mutted">Jl. KS Tubun 31, Tanah Abang</p>
                                                <p class="text-sm text-mutted" style="margin-top: -10px">DKI Jakarta - Indonesia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="invoice-top">
                                <div class="row">
                                    <div class="col-lg-9 col-md-6">
                                        <div class="invoice-number">
                                            <h4 class="invoice-title-1 mb-10">Invoice To</h4>
                                            <p class="invoice-addr-1">
                                                <strong>{{ cart.customer_name }}</strong> <br />
                                                {{ cart.customer_email }} <br />
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="invoice-number">
                                            <h4 class="invoice-title-1 mb-10">Shipping To</h4>
                                            <p class="invoice-addr-1">
                                                <strong>{{ cart.selected_customer_name }}</strong> <br />
                                                {{ cart.selected_customer_phone }} <br />
                                                {{ cart.selected_customer_address }}, <br />{{ cart.selected_customer_state }}, {{ cart.selected_customer_zip }}, {{ cart.selected_customer_country }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-lg-9 col-md-6">
                                        <h4 class="invoice-title-1 mb-10">Shipping Information:</h4>
                                        <p class="invoice-from-1">{{ cart.current_shipping_provider }} {{ cart.current_shipping_methods }} - {{ cart.current_shipping_airways_bill }}</p>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <h4 class="invoice-title-1 mb-10">Payment Method</h4>
                                        <p class="invoice-from-1">{{ cart.selected_payment_method }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="invoice-center">
                                <div class="table-responsive">
                                    <table class="table table-striped invoice-table">
                                        <thead class="bg-active">
                                            <tr>
                                                <th class="text-summary">Item</th>
                                                <th class="text-summary text-center">Unit Price</th>
                                                <th class="text-summary text-center">Quantity</th>
                                                <th class="text-summary text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="prod in cart.item" :key="prod.id">
                                                <td>
                                                    <div class="item-desc-1">
                                                        <span>{{ prod.name }}</span>
                                                        <small>SKU: FWM15VKT</small>
                                                    </div>
                                                </td>
                                                <td class="text-center">Rp. {{ formatPrice(prod.price) }}</td>
                                                <td class="text-center">{{ prod.qty }}</td>
                                                <td class="text-end">Rp. {{ formatPrice(prod.price * prod.qty) }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" class="text-end f-w-600">SubTotal</td>
                                                <td class="text-end">Rp. {{ formatPrice(cart.total) }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" class="text-end f-w-600">Tax</td>
                                                <td class="text-end">Rp. {{ formatPrice(cart.tax) }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" class="text-end f-w-600">Shipping</td>
                                                <td class="text-end">Rp. {{ formatPrice(cart.current_shipping_price) }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" class="text-end f-w-600">Grand Total</td>
                                                <td class="text-end f-w-600">Rp. {{ countProductPrice() }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="invoice-bottom">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div>
                                            <h3 class="invoice-title-1">Important Note</h3>
                                            <ul class="important-notes-list-1">
                                                <li>All amounts shown on this invoice are in US dollars</li>
                                                <li>finance charge of 1.5% will be made on unpaid balances after 30 days.</li>
                                                <li>Once order done, money can't refund</li>
                                                <li>Delivery might delay due to some external dependency</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-offsite">
                                        <div class="text-end">
                                            <p class="mb-0 text-13">Thank you for your business</p>
                                            <p><strong>Apotik Melawai</strong></p>
                                            <div class="mobile-social-icon mt-50 print-hide">
                                                <h6>Follow Us</h6>
                                                <a href="#"><img src="/assets/images/theme/icons/icon-facebook-white.svg" alt="" /></a>
                                                <a href="#"><img src="/assets/images/theme/icons/icon-twitter-white.svg" alt="" /></a>
                                                <a href="#"><img src="/assets/images/theme/icons/icon-instagram-white.svg" alt="" /></a>
                                                <a href="#"><img src="/assets/images/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                                                <a href="#"><img src="/assets/images/theme/icons/icon-youtube-white.svg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-btn-section clearfix d-print-none">
                            <a href="javascript:window.print()" class="btn btn-lg btn-custom btn-print hover-up"> <img src="/assets/images/theme/icons/icon-print.svg" alt="" /> Print </a>
                            <a id="invoice_download_btn" class="btn btn-lg btn-custom btn-download hover-up"> <img src="/assets/images/theme/icons/icon-download.svg" alt="" /> Download </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InvoiceView',
    data(){
        return{
            cart: {
                quantity: 0,
                total: 0,
                discount: 0,
                tax: 0,
                current_shipping_price: 12000,
                current_shipping_provider: 'JNE',
                current_shipping_methods: 'REG',
                current_shipping_airways_bill: 'JT10412001',
                selected_shipping_address: 1,
                selected_cutomer_address_name: 'Home',
                selected_customer_name: 'Admin Melawai',
                selected_customer_phone: '+(62) 83812640683',
                selected_customer_address: 'JL. KS Tubun 31, Petamburan, Jakarta Pusat',
                selected_customer_state: 'Jakarta',
                selected_customer_country: 'Indonesia',
                selected_customer_zip: 112091,
                selected_payment_method: 'Bank Transfer',
                customer_name: 'Admin Melawai',
                customer_email: 'admin@apotikmelawai.id',
                item: [
                    {id: 0, name: 'Garnier Men Acno Fight', images: 'garnier-acno-fight-1.jpg', price: 33500, discount: 20, qty: 1, status: 'instock', rating: 90, deleted: false, is_selected: true,},
                    {id: 1, name: 'Detol Hand Wash', images: 'detol-hand-wash-1.jpg', price: 40000, discount: 0, qty: 2, status: 'instock', rating: 70, deleted: false, is_selected: true,},
                    {id: 2, name: 'Woods Herbal', images: 'woods-herbal-1.jpg', price: 29000, discount: 10, qty: 1, status: 'instock', rating: 80, deleted: false, is_selected: true,},
                    {id: 3, name: 'Enervon-C 100 Tablet', images: 'enervonc-1.jpg', price: 114500, discount: 5, qty: 1, status: 'instock', rating: 78, deleted: false, is_selected: true,},
                ],
            },
        }
    },
    methods: {
        formatPrice(value){
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        countProductPrice(){
            this.cart.total = 0;
            this.cart.tax = 0;
            this.cart.item.forEach((element) => {
                this.cart.total += element.price * element.qty;
                this.cart.tax += ((element.price * 10) / 100) * element.qty;
            });

            var grand = (this.cart.total + this.cart.tax - this.cart.discount) + this.cart.current_shipping_price;
            let val = (grand/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>

<style>

</style>