<template>
    <main class="main pages">
        <div class="page-content pt-150 pb-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 m-auto">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="dashboard-menu">
                                    <div class="border">
                                        <img src="" alt="">
                                    </div>
                                    <ul class="nav flex-column" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="false"><i class="fi-rs-settings-sliders mr-10"></i>Dashboard</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i class="fi-rs-shopping-bag mr-10"></i>Orders</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="track-orders-tab" data-bs-toggle="tab" href="#track-orders" role="tab" aria-controls="track-orders" aria-selected="false"><i class="fi-rs-shopping-cart-check mr-10"></i>Track Your Order</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="address-tab" data-bs-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true"><i class="fi-rs-marker mr-10"></i>My Address</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="account-detail-tab" data-bs-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="true"><i class="fi-rs-user mr-10"></i>Account details</a>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" :to="{name: 'Login'}"><i class="fi-rs-sign-out mr-10"></i>Logout</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="tab-content account dashboard-content pl-50">
                                    <div class="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="mb-0">Hello Rosie!</h3>
                                            </div>
                                            <div class="card-body">
                                                <p>
                                                    From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>,<br />
                                                    manage your <a href="#">shipping and billing addresses</a> and <a href="#">edit your password and account details.</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="mb-0">Your Orders</h3>
                                            </div>
                                            <div style="width: 100%;display: flex;padding: 10px;flex-direction: row;flex-wrap: wrap;align-items: center;gap: 10px;margin-bottom: 10px;">
                                                <strong class="text-summary" style="font-weight: bolder;color: #000">Status</strong>
                                                <div style="display: flex;flex-direction: row;flex-wrap: wrap;gap: 10px;margin-left: 20px;">
                                                    <div style="height: 40px;border: 1px solid #b22a2e;display: flex;align-items: center;justify-content: center;padding: 0 10px;cursor: pointer;border-radius: 3px;">All</div>
                                                    <div style="height: 40px;border: 1px solid #b22a2e;display: flex;align-items: center;justify-content: center;padding: 0 10px;cursor: pointer;border-radius: 3px">On Process</div>
                                                    <div style="height: 40px;border: 1px solid #b22a2e;display: flex;align-items: center;justify-content: center;padding: 0 10px;cursor: pointer;border-radius: 3px">Completed</div>
                                                    <div style="height: 40px;border: 1px solid #b22a2e;display: flex;align-items: center;justify-content: center;padding: 0 10px;cursor: pointer;border-radius: 3px">Canceled</div>
                                                </div>
                                            </div>
                                            <div style="width: 100%;display: flex;flex-direction: column;left: 0;margin-top: 15px;" v-for="order in customer.order" :key="order.id">
                                                <div style="width:100%;margin: 5px 10px;border: 1px solid #f3f3f3;box-shadow: 0 3px 5px rgba(0, 0, 0, 0.115), 0 1px 2px rgba(102, 102, 102, 0.24);border-radius: 5px;">
                                                    <div style="display: flex;align-items: center;padding: 10px 20px;flex-direction: row;flex-wrap: wrap;justify-content: start;">
                                                        <img style="width: 24px;" src="/assets/images/theme/icons/invoice.svg"> 
                                                        <span class="text-summary" style="color: #4f4f4f;font-size: 14pt;margin-top: 5px;margin-left: 10px;font-weight: bold;">Shopping</span>
                                                        <span class="text-summary" style="color: #4f4f4f;font-size: 12pt;margin-top: 7.5px;margin-left: 30px">11 August 2023</span>
                                                        <div style="width: 100px;height: 25px;background-color: rgb(127, 255, 187);border-radius: 5px;display: flex;align-items: center;justify-content: center;color: #fff;margin-left: 30px">
                                                            Delivering
                                                        </div>
                                                        <span style="color: #4f4f4f;font-size: 100%;margin-top: 5px;margin-left: 10px;font-weight: 400;margin-left: 30px">{{ order.invoice }}</span>
                                                    </div>
                                                    <div style="width: 100%;padding: 0 20px;display: flex;align-items: center;flex-direction: row;gap: 10px;">
                                                        <img style="width: 20px;margin-left: 3px;" src="/assets/images/theme/logo-box.png" alt="">
                                                        <span class="text-summary" style="font-size: 14pt;margin-top: 7px;font-weight: bold;color: #313131">{{ order.seller }}</span>
                                                    </div>
                                                    <div style="position: relative;width: 100%;display: flex;flex-direction: row;">
                                                        <div style="width: 25%;padding: 10px">
                                                            <img style="width: 80%" :src="getProductImg(order.item[0].images)" alt="">
                                                        </div>
                                                        <div style="width: 75%;padding-top: 20px;display: flex;flex-direction: column;">
                                                            <span><a href="" class="text-summary" style="font-size: 16pt;color: #292929">{{ order.item[0].name }}</a></span>
                                                            <span class="text-summary">{{ order.item[0].qty }} <small style="font-size: 10pt;">x</small> Rp. {{ formatPrice(order.item[0].price) }}</span>
                                                            <br>
                                                            <span class="text-success">+{{ order.item.length - 1}} Others Product</span>
                                                            <span class="text-danger text-summary" style="font-weight: bolder;">Rp. {{ formatPrice(order.grand) }} Total</span>
                                                            <div style="position: absolute;bottom: 20px;right: 10px;display: flex;flex-direction: row-reverse;gap: 5px;flex-shrink: inherit;">
                                                                <button class="btn" style="border-radius: 10px;">...</button>
                                                                <button class="btn">Tracking</button>
                                                                <button class="btn">Transaction Detail</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="track-orders" role="tabpanel" aria-labelledby="track-orders-tab">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="mb-0">Orders tracking</h3>
                                            </div>
                                            <div class="card-body contact-from-area">
                                                <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <form class="contact-form-style mt-30 mb-50" action="#" method="post">
                                                            <div class="input-style mb-20">
                                                                <label>Order ID</label>
                                                                <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                                            </div>
                                                            <div class="input-style mb-20">
                                                                <label>Billing email</label>
                                                                <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                                            </div>
                                                            <button class="submit submit-auto-width" type="submit">Track</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="card mb-3 mb-lg-0">
                                                    <div class="card-header">
                                                        <h3 class="mb-0">Billing Address</h3>
                                                    </div>
                                                    <div class="card-body">
                                                        <address>
                                                            3522 Interstate<br />
                                                            75 Business Spur,<br />
                                                            Sault Ste. <br />Marie, MI 49783
                                                        </address>
                                                        <p>New York</p>
                                                        <a href="#" class="btn-small">Edit</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <h5 class="mb-0">Shipping Address</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <address>
                                                            4299 Express Lane<br />
                                                            Sarasota, <br />FL 34249 USA <br />Phone: 1.941.227.4444
                                                        </address>
                                                        <p>Sarasota</p>
                                                        <a href="#" class="btn-small">Edit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="account-detail" role="tabpanel" aria-labelledby="account-detail-tab">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Account Details</h5>
                                            </div>
                                            <div class="card-body">
                                                <p>Already have an account? <a href="page-login.html">Log in instead!</a></p>
                                                <form method="post" name="enq">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label>First Name <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="name" type="text" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label>Last Name <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="phone" />
                                                        </div>
                                                        <div class="form-group col-md-12">
                                                            <label>Display Name <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="dname" type="text" />
                                                        </div>
                                                        <div class="form-group col-md-12">
                                                            <label>Email Address <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="email" type="email" />
                                                        </div>
                                                        <div class="form-group col-md-12">
                                                            <label>Current Password <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="password" type="password" />
                                                        </div>
                                                        <div class="form-group col-md-12">
                                                            <label>New Password <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="npassword" type="password" />
                                                        </div>
                                                        <div class="form-group col-md-12">
                                                            <label>Confirm Password <span class="required">*</span></label>
                                                            <input required="" class="form-control" name="cpassword" type="password" />
                                                        </div>
                                                        <div class="col-md-12">
                                                            <button type="submit" class="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AccountView',
    data() {
        return {
            customer: {
                name: 'Customer Melawai',
                address: [
                    {
                        id: 1,
                        address_name: 'Home',
                        customer_name: 'Admin Melawai',
                        phone: '+(62) 83812640683',
                        address: 'JL. KS Tubun 31, Petamburan, Jakarta Pusat',
                        state: 'Jakarta',
                        country: 'Indonesia',
                        zip: 112091,
                    },
                    {
                        id: 2,
                        address_name: 'Office',
                        customer_name: 'Customer Melawai',
                        phone: '+(62) 83812121314',
                        address: 'JL. KS Tubun 72, Petamburan, Jakarta Pusat',
                        state: 'Jakarta',
                        country: 'Indonesia',
                        zip: 112092,
                    }
                ],
                order: [
                    {
                        invoice: 'INV/20230809/APT/47300',
                        date: '09/08/2023',
                        status: 'Delivering',
                        quantity: 5,
                        total: 257000,
                        discount: 0,
                        tax: 25700,
                        grand: 294700,
                        current_shipping_price: 12000,
                        current_shipping_provider: 'JNE',
                        current_shipping_methods: 'REG',
                        selected_shipping_address_name: 'Home',
                        selected_shipping_name: 'Admin Melawai',
                        selected_shipping_phone: '+(62) 83812640683',
                        selected_shipping_address: 'JL. KS Tubun 31, Petamburan, Jakarta Pusat',
                        selected_shipping_state: 'Jakarta',
                        selected_shipping_country: 'Indonesia',
                        selected_shipping_zip: 112091,
                        selected_payment_method: 'Bank Transfer',
                        invoice_name: 'Customer Melawai',
                        invoice_email: 'admin@optikmelawai.id',
                        customer_id: 'ce3e6106-3656-11ee-be56-0242ac120002',
                        seller: 'Apotik Melawai',
                        item: [
                            { id: 0, name: 'Garnier Men Acno Fight', images: 'garnier-acno-fight-1.jpg', price: 33500, discount: 20, qty: 1, status: 'instock', rating: 90, deleted: false, is_selected: true, },
                            { id: 1, name: 'Detol Hand Wash', images: 'detol-hand-wash-1.jpg', price: 40000, discount: 0, qty: 2, status: 'instock', rating: 70, deleted: false, is_selected: true, },
                            { id: 2, name: 'Woods Herbal', images: 'woods-herbal-1.jpg', price: 29000, discount: 10, qty: 1, status: 'instock', rating: 80, deleted: false, is_selected: true, },
                            { id: 3, name: 'Enervon-C 100 Tablet', images: 'enervonc-1.jpg', price: 114500, discount: 5, qty: 1, status: 'instock', rating: 78, deleted: false, is_selected: true, },
                        ],
                    },
                    {
                        invoice: 'INV/20230809/APT/54100',
                        date: '09/08/2023',
                        status: 'Delivering',
                        quantity: 5,
                        total: 257000,
                        discount: 0,
                        tax: 25700,
                        grand: 294700,
                        current_shipping_price: 12000,
                        current_shipping_provider: 'JNE',
                        current_shipping_methods: 'REG',
                        selected_shipping_address_name: 'Home',
                        selected_shipping_name: 'Admin Melawai',
                        selected_shipping_phone: '+(62) 83812640683',
                        selected_shipping_address: 'JL. KS Tubun 31, Petamburan, Jakarta Pusat',
                        selected_shipping_state: 'Jakarta',
                        selected_shipping_country: 'Indonesia',
                        selected_shipping_zip: 112091,
                        selected_payment_method: 'Bank Transfer',
                        invoice_name: 'Customer Melawai',
                        invoice_email: 'admin@optikmelawai.id',
                        customer_id: 'ce3e6106-3656-11ee-be56-0242ac120002',
                        seller: 'Apotik Melawai',
                        item: [
                            { id: 1, name: 'Detol Hand Wash', images: 'detol-hand-wash-1.jpg', price: 40000, discount: 0, qty: 2, status: 'instock', rating: 70, deleted: false, is_selected: true, },
                            { id: 0, name: 'Garnier Men Acno Fight', images: 'garnier-acno-fight-1.jpg', price: 33500, discount: 20, qty: 1, status: 'instock', rating: 90, deleted: false, is_selected: true, },
                            { id: 2, name: 'Woods Herbal', images: 'woods-herbal-1.jpg', price: 29000, discount: 10, qty: 1, status: 'instock', rating: 80, deleted: false, is_selected: true, },
                            { id: 3, name: 'Enervon-C 100 Tablet', images: 'enervonc-1.jpg', price: 114500, discount: 5, qty: 1, status: 'instock', rating: 78, deleted: false, is_selected: true, },
                        ],
                    },
                ]
            }
        };
    },
    methods: {
        formatPrice(value){
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        getProductImg(filename){
            return '/assets/images/products/' + filename;
        },
    }
}
</script>

<style>

</style>