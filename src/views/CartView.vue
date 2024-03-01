<template>
    <main class="main" style="overflow: hidden;">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Shop
                    <span></span> Cart
                </div>
            </div>
        </div>
        <div class="container mb-80 mt-50">
            <div class="row">
                <div class="col-lg-8 mb-40">
                    <h1 class="heading-2 mb-10">Your Cart</h1>
                    <div class="d-flex justify-content-between">
                        <h6 class="text-body">There are <span class="text-brand">{{ cart.item.length }}</span> products in your cart</h6>
                        <h6 class="text-body"><a @click="clearCart" class="text-summary"><i class="fi-rs-trash mr-5"></i><span v-show="screensize >= 768">Clear Cart</span></a></h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="table-responsive shopping-summery" style="border-radius: 0;">
                        <table class="table table-wishlist" v-if="screensize >= 768">
                            <thead>
                                <tr class="main-heading">
                                    <th class="custome-checkbox start pl-30">
                                        <input class="form-check-input" type="checkbox" id="selectall" v-model="select_all">
                                        <label class="form-check-label" for="selectall"></label>
                                    </th>
                                    <th scope="col" colspan="2">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col" class="end">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="pt-30" v-for="prod in cart.item" :key="prod.id" v-show="!prod.deleted">
                                    <td class="custome-checkbox pl-30">
                                        <input class="form-check-input" type="checkbox" v-model="prod.is_selected" @change="countProductPrice" :id="'productcheckbox' + prod.id">
                                        <label class="form-check-label" :for="'productcheckbox' + prod.id"></label>
                                    </td>
                                    <td class="image product-thumbnail pt-40"><img :src="getProductImg(prod.images)" alt="#"></td>
                                    <td class="product-des product-name">
                                        <h6 class="mb-5"><a class="product-name mb-10 text-heading" href="shop-product-right.html">{{ prod.name }}</a></h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" :style="{width:  prod.rating + '%'}"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"></span>
                                        </div>
                                    </td>
                                    <td class="price" data-title="Price">
                                        <h4 class="text-body" style="font-size: 12pt;">Rp. {{ formatPrice(prod.price) }}</h4>
                                    </td>
                                    <td class="text-center detail-info" data-title="Stock">
                                        <div class="detail-extralink mr-15">
                                            <div class="detail-qty border radius">
                                                <a href="#" class="qty-down"><i class="fi-rs-angle-small-down"></i></a>
                                                <span class="qty-val">{{ prod.qty }}</span>
                                                <a href="#" class="qty-up"><i class="fi-rs-angle-small-up"></i></a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="price" data-title="Price">
                                        <h4 class="text-brand" style="font-size: 12pt;">Rp. {{ countTotal(prod.price, prod.qty) }}</h4>
                                    </td>
                                    <td class="action text-center" data-title="Remove"><a @click="deleteProduct(prod.id, prod.price, prod.qty)" class="text-body"><i class="fi-rs-trash"></i></a></td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="table table-wishlist" v-if="screensize < 767">
                            <div v-for="prod in cart.item" :key="prod.id" v-show="!prod.deleted">
                                <div style="position: relative;display: flex;flex-direction: row;border: 1px solid #f2f2f2;margin: 10px 0">
                                    <div style="position: absolute;top: 5px;right: 5px;width:25px;height: 25px;border:1px solid #e2e2e2;cursor: pointer;display: flex; align-items: center;justify-content: center" @click="deleteProduct(prod.id, prod.price, prod.qty)">
                                        <i class="fi-rs-cross"></i>
                                    </div>
                                    <div class="image product-thumbnail pt-40" style="width: 30%"><img :src="getProductImg(prod.images)" alt="#"></div>
                                    <div class="product-des product-name" style="width:70%">
                                        <h6 class="mb-5 mt-30">
                                            <a class="product-name mb-10 text-heading" style="font-weight: bolder;font-size: 12pt">{{ prod.name }}</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" :style="{width:  prod.rating + '%'}"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"></span>
                                        </div>

                                        <div style="width: 100%;display: flex;flex-direction: column;margin-top: 10px">
                                            <div style="width: 100%;display: flex; flex-direction: row">
                                                <div class="w-50 text-dark" style="font-weight: 400">Unit Price</div>
                                                <div class="w-50 text-dark" style="font-weight: bolder">Rp. {{ formatPrice(prod.price) }}</div>
                                            </div>

                                            <div style="width: 100%;display: flex; flex-direction: row">
                                                <div class="w-50 text-dark" style="font-weight: 400">Quantity</div>
                                                <div style="width:50%">
                                                    <div style="width: 100%">
                                                        <div style="width: 100%;height: 30px;margin: 0 auto;display: flex;flex-direction: row">
                                                            <div style="display: flex; align-items: center; justify-content: center;width:50px;height:25px;border: 1px solid #ebebeb;cursor: pointer;">-</div>
                                                            <div style="width:100px;height:25px;border: 1px solid #ebebeb;">
                                                                <input type="text" v-model="prod.qty" style="height: 25px;border-radius 0px;border: 0;background: transparent">
                                                            </div>
                                                            <div style="display: flex; align-items: center; justify-content: center;width:50px;height:25px;border: 1px solid #ebebeb;cursor: pointer;">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div style="width: 100%;display: flex; flex-direction: row">
                                                <div class="w-50 text-dark" style="font-weight: 400">Grand Total</div>
                                                <div class="w-50 text-danger">Rp. {{ formatPrice(prod.price * prod.qty) }}</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider-2 mb-30"></div>
                    <div class="cart-action d-flex justify-content-between">
                        <a class="btn"><i class="fi-rs-arrow-left mr-10"></i>Shopping</a>
                        <a class="btn"><i class="fi-rs-refresh mr-10"></i>Update Cart</a>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <!-- <div class="border p-md-4 cart-totals ml-30">
                        <div class="table-responsive">
                            <h6 class="text-secondary" style="font-size: 12pt;">Address</h6>
                            <table class="table no-border mt-1">
                                <tbody>
                                    <tr style="position: relative;">
                                        <i class="fi-rs-home ml-15 text-secondary" style="position: absolute;top: 0;right: 0;font-size: 30px;"></i>
                                        <div style="padding: 20px">
                                            <div style="display: flex;flex-direction: row;align-items: center;gap: 5px;">
                                                <input type="radio" checked style="width: 15px;margin-top: -3px;"><h6 class="text-muted">{{ cart.selected_cutomer_address_name }}</h6>
                                            </div>
                                            <h6 class="text-summary text-start">{{ cart.selected_customer_name }}</h6>
                                            <h6 class="text-summary text-start">{{ cart.selected_customer_phone }}</h6>
                                            <p class="text-summary text-start mt-2">{{ cart.selected_customer_address }}</p>
                                            <h6 class="text-summary text-start">{{ cart.selected_customer_state }} - {{ cart.selected_customer_country }}</h6>
                                            <h6 class="text-summary text-start">{{ cart.selected_customer_zip }}</h6>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <a aria-label="Address Modal" class="btn mb-20 w-100" style="margin-top: -11px" data-bs-toggle="modal" data-bs-target="#addressModal">Change Address</a>

                        <h6 class="text-secondary" style="font-size: 12pt;">Shipping Method</h6>
                        <table class="table no-border mt-1">
                            <tbody>
                                <tr>
                                    <td colspan="2" class="cart_total_label" style="background-color: #fafafa;display: flex;flex-direction: row;align-items: center;gap: 5px;height: 50px;">
                                        <div class="mydict">
                                            <div>
                                                <label v-for="ship in shipping_methods" :key="ship.id">
                                                    <input type="radio" name="shipping_provider" :value="ship.id" @change="setShippingProvider(ship.shipping_provider)">
                                                    <span>{{ ship.shipping_provider }}</span>
                                                </label>                                                   
                                            </div>
                                        </div>
                                    </td>                                        
                                </tr>
                                <tr>
                                    
                                    <div class="shipping-wrapper" v-for="shipp in shipping_methods" :key="shipp.id">
                                        <div v-show="cart.current_shipping_provider === shipp.shipping_provider">
                                            <label v-for="svc in shipp.services" :key="svc.id">
                                                <input type="radio" name="shipping_method" :value="svc.id" @change="setShippingMethod(svc.shipping_name, svc.shipping_price)">
                                                <span>{{ svc.shipping_name }}</span>
                                            </label>
                                        </div>
                                    </div>
    
                                </tr>
                            </tbody>
                        </table>
                    </div> -->

                    <div class="w-100">
                        <div class="p-40">
                            <h4 class="order-summary mb-10">Apply Coupon</h4>
                            <p class="mb-30"><span class="font-lg text-muted">Using A Promo Code?</span></p>
                            <div>
                                <div class="d-flex justify-content-between" style="widows: 100%;">
                                    <input class="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" style="width: 70%;border-radius:0">
                                    <button class="btn"><i class="fi-rs-label mr-10" style="width: 30%"></i>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="border p-md-4 cart-totals ml-30">
                        <div class="calculate-shiping p-40 border">
                            <h4 class="mb-10">Calculate Shipping</h4>
                            <p class="mb-30"><span class="font-lg text-muted">Flat rate:</span><strong class="text-brand">5%</strong></p>
                            <form class="field_form shipping_calculator">
                                <div class="form-row">
                                    <div class="form-group col-lg-12">
                                        <div class="custom_select">
                                            <select class="form-control select-active w-100">
                                                <option value="">United Kingdom</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="PW">Belau</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">British Indian Ocean Territory</option>
                                                <option value="VG">British Virgin Islands</option>
                                                <option value="BN">Brunei</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo (Brazzaville)</option>
                                                <option value="CD">Congo (Kinshasa)</option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">CuraÇao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="CI">Ivory Coast</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Laos</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao S.A.R., China</option>
                                                <option value="MK">Macedonia</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">Micronesia</option>
                                                <option value="MD">Moldova</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="AN">Netherlands Antilles</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="KP">North Korea</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PS">Palestinian Territory</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="QA">Qatar</option>
                                                <option value="IE">Republic of Ireland</option>
                                                <option value="RE">Reunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russia</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="ST">São Tomé and Príncipe</option>
                                                <option value="BL">Saint Barthélemy</option>
                                                <option value="SH">Saint Helena</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="SX">Saint Martin (Dutch part)</option>
                                                <option value="MF">Saint Martin (French part)</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                <option value="SM">San Marino</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">South Georgia/Sandwich Islands</option>
                                                <option value="KR">South Korea</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                <option value="SZ">Swaziland</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syria</option>
                                                <option value="TW">Taiwan</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom (UK)</option>
                                                <option value="US">USA (US)</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VA">Vatican</option>
                                                <option value="VE">Venezuela</option>
                                                <option value="VN">Vietnam</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="WS">Western Samoa</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row row">
                                    <div class="form-group col-lg-6">
                                        <input required="required" placeholder="State / Country" name="name" type="text">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input required="required" placeholder="PostCode / ZIP" name="name" type="text">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> -->

                    <div class="border p-md-4 cart-totals ml-30 mt-3" style="background-color: #fafafa">
                        <div class="table-responsive">
                            <h5 class="order-summary">Order Summary</h5>
                            <table class="no-border" style="border: 0;">
                                <tbody>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Subtotal</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-heading text-end">Rp. {{ formatPriceSummary(cart.total) }}</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Discount</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-heading text-end">Rp. {{ formatPriceSummary(cart.discount) }}</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Tax</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-heading text-end">Rp. {{ formatPriceSummary(cart.tax) }}</h4>
                                        </td>
                                    </tr>                         
                                    <tr v-show="cart.current_shipping_price > 0">
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Shipping</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-heading text-end">Rp. {{ formatPriceSummary(cart.current_shipping_price) }}</h4>
                                        </td> 
                                    </tr> 
                                    <tr v-show="cart.current_shipping_price > 0">
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Sipping Method</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h5 class="text-heading text-end">{{ cart.current_shipping_provider }} {{ cart.current_shipping_methods }}</h5>
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td scope="col" colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Total</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-heading text-end">Rp. {{ countGrandTotal() }}</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <router-link :to="{name: 'Checkout'}" class="btn mb-20 w-100">Proceed To CheckOut<i class="fi-rs-sign-out ml-15"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Quick view -->
    <div class="modal fade custom-modal" id="addressModal" tabindex="-1" aria-labelledby="addressModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="row">
                        <div class="address-input">
                            <div class="info">
                                <span class="question">Select Shipping Address</span>
                            </div>

                            <div v-for="address in shipping_address" :key="address.id">
                                <input type="radio" :id="'value-' + address.id" name="address-1" value="value-2" 
                                :checked="cart.selected_shipping_address === address.id" 
                                @click="setShippingAddress(address.address_name, 
                                                            address.customer_name, 
                                                            address.phone, 
                                                            address.address, 
                                                            address.state, 
                                                            address.country, 
                                                            address.zip)">

                                <label :for="'value-' + address.id" style="position: relative;">
                                    <i class="fi-rs-home ml-15 text-secondary" style="position: absolute;top: 10px;right: 10px;font-size: 30px;"></i>
                                    {{ address.address_name }} <br>
                                    {{ address.customer_name }} <br>
                                    {{ address.phone }} <br>
                                    {{ address.address }} <br>
                                    {{ address.state }} - {{ address.country }} <br>
                                    {{ address.zip }}
                                </label>
                            </div>
                            
                            <span v-show="setsuccess" class="result success">Address set successfuly!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartView',
    data(){
        return{
            select_all: true,
            setsuccess: false,
            screensize: 0,
            cart: {
                quantity: 0,
                total: 0,
                discount: 0,
                tax: 0,
                current_shipping_price: 0,
                current_shipping_provider: '',
                current_shipping_methods: '',
                selected_shipping_address: 1,
                selected_cutomer_address_name: 'Home',
                selected_customer_name: 'Admin Melawai',
                selected_customer_phone: '+(62) 83812640683',
                selected_customer_address: 'JL. KS Tubun 31, Petamburan, Jakarta Pusat',
                selected_customer_state: 'Jakarta',
                selected_customer_country: 'Indonesia',
                selected_customer_zip: 112091,
                item: [
                    {id: 0, name: 'Garnier Men Acno Fight', images: 'garnier-acno-fight-1.jpg', price: 33500, discount: 20, qty: 1, status: 'instock', rating: 90, deleted: false, is_selected: true,},
                    {id: 1, name: 'Detol Hand Wash', images: 'detol-hand-wash-1.jpg', price: 40000, discount: 0, qty: 2, status: 'instock', rating: 70, deleted: false, is_selected: true,},
                    {id: 2, name: 'Woods Herbal', images: 'woods-herbal-1.jpg', price: 29000, discount: 10, qty: 1, status: 'instock', rating: 80, deleted: false, is_selected: true,},
                    {id: 3, name: 'Enervon-C 100 Tablet', images: 'enervonc-1.jpg', price: 114500, discount: 5, qty: 3, status: 'instock', rating: 78, deleted: false, is_selected: true,},
                ],
            },
            shipping_address: [
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
            shipping_methods: [
                {
                    id: 1,
                    shipping_provider: 'JNE',
                    services: [
                        {id: 'jne1', shipping_name: 'REG', shipping_price: 12000},
                        {id: 'jne2', shipping_name: 'YES', shipping_price: 19000},
                        {id: 'jne3', shipping_name: 'TRUCKING', shipping_price: 10000},
                    ],
                },
                {
                    id: 2,
                    shipping_provider: 'TIKI',
                    services: [
                        {id: 'tki1', shipping_name: 'REG', shipping_price: 12000},
                        {id: 'tki2', shipping_name: 'ONS', shipping_price: 21000},
                        {id: 'tki3', shipping_name: 'TRC', shipping_price: 9000},
                    ],
                },
            ]
        }
    },
    watch: {
        select_all: function(){
            if(this.select_all) {
                this.cart.item.forEach((element) => {
                    element.is_selected = true;
                });
            } else {
                this.cart.item.forEach((element) => {
                    element.is_selected = false;
                });
            }

            this.countProductPrice();
        },
        cart: function(){
            this.countProductPrice()
        }
    },
    mounted(){
        this.countProductPrice();
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
        getProductImg(filename){
            return '/assets/images/products/' + filename;
        },
        formatPrice(value){
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatPriceSummary(value){
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        setShippingProvider(provider){
            this.cart.current_shipping_provider = provider;
            this.cart.current_shipping_methods = '';
            this.cart.current_shipping_price = 0;
        },
        setShippingMethod(name, price){ 
            this.cart.current_shipping_methods = name;
            this.cart.current_shipping_price = price;
        },
        setShippingAddress(address_name, cust_name, phone, address, state, country, zip){
            this.cart.selected_cutomer_address_name = address_name;
            this.cart.selected_customer_name = cust_name;
            this.cart.selected_customer_phone = phone;
            this.cart.selected_customer_address = address;
            this.cart.selected_customer_state = state;
            this.cart.selected_customer_country = country;
            this.cart.selected_customer_zip = zip;

            this.setsuccess = true;
            setTimeout(() => {
                this.setsuccess = false;
            }, 2000);
        },
        clearCart(){
            this.cart.item.forEach((element) => {
                element.deleted = true;
                element.is_selected = false;
            });

            this.countProductPrice();
        },
        deleteProduct(id, price, quantity){
            this.cart.item[id].deleted = true;
            this.cart.item[id].is_selected = false;
            var ntotal = parseFloat(price) * parseFloat(quantity);
            var ntax = (price * 10) / 100;
            var ttax = ntax * quantity;

            this.cart.total -= ntotal;
            this.cart.tax -= ttax;
        },
        countProductPrice(){
            this.cart.total = 0;
            this.cart.tax = 0;
            this.cart.item.forEach((element) => {
                if(element.is_selected){
                    this.cart.total += element.price * element.qty;
                    this.cart.tax += ((element.price * 10) / 100) * element.qty;
                }
            });
        },
        countGrandTotal(){
            var grand = (this.cart.total + this.cart.tax - this.cart.discount) + this.cart.current_shipping_price;
            let val = (grand/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        countProductDiscount(price, disc){
            var countDisc = (price * disc) / 100;
            var total = price - countDisc;
            let val = (total/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        countTotal(price, qty){
            var count = price * qty;
            let val = (count/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }   
    }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/black-rotela-free-personal');
.order-summary{
    font-size: 25pt;
    font-family: 'Black Rotela Free Personal', sans-serif;
    margin-bottom: 20px;
    color: #2b2b2b;
    text-align: left;
}

.zeropadding{
    padding: 0;
    margin: 0;
    text-align: left;
    color: #2b2b2b;
}

.zeropadding h4{
    font-size: 13pt;
    color: #2b2b2b;
    font-weight: bolder;
}

.mydict{
    position: relative;
    width: 100%;
}

.mydict div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    justify-content: center;
    width: 100%;
}

.mydict:focus {
    outline: 0;
    border-color: #b22a2e;
    box-shadow: 0 0 0 4px #ffd9d9;
}

.mydict input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.mydict input[type="radio"]:checked + span {
    box-shadow: 0 0 0 0.0625em #b22a2e;
    background-color: #ffd9d9;
    z-index: 1;
    color: #b22a2e;
}

.mydict label span {
    display: block;
    cursor: pointer;
    background-color: #fff;
    padding: 0.375em .75em;
    position: relative;
    margin-left: .0625em;
    box-shadow: 0 0 0 0.0625em #b5bfd9;
    letter-spacing: .05em;
    color: #3e4963;
    text-align: center;
    transition: background-color .5s ease;
}

.mydict label:first-child span {
    border-radius: 0;
}

.mydict label:last-child span {
    border-radius: 0;
}

/* radio button */
.shipping-wrapper form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.shipping-wrapper label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
}

.shipping-wrapper  label input {
    position: absolute;
    left: -9999px;
}

.shipping-wrapper label input:checked + span {
    background-color: #cecece;
    color: white;
}

.shipping-wrapper label input:checked + span:before {
    box-shadow: inset 0 0 0 0.4375em #b22a2e;
}

.shipping-wrapper label span {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;
    color: #292929;
}

.shipping-wrapper label span:hover {
    background-color: #ffa5a8;
}

.shipping-wrapper label span:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em #b22a2e;
}

/* address input */
.address-input input {
  display: none;
}

.address-input {
  display: flex;
  flex-direction: column;
  padding: 12px;
  background: #fff;
  color: #000;
  border-radius: 3px;
  border: 2px solid #ececec;
  width: 100%;
}

.info {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.question {
  color: rgb(49, 49, 49);
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 800;
}

.steps {
  background-color: rgb(0, 0, 0);
  padding: 4px;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
}

.address-input  label {
  display: flex;
  background-color: #fff;
  padding: 14px;
  margin: 8px 0 0 0;
  font-size: 13px;
  font-weight: 600;
  border-radius: 0;
  cursor: pointer;
  border: 1px solid rgba(187, 187, 187, 0.164);
  color: #000;
  transition: .3s ease;
}

.address-input  label:hover {
  background-color: rgba(24, 24, 24, 0.13);
  border: 1px solid #bbb;
}

.result {
  margin-top: 10px;
  font-weight: 400;
  font-size: 11pt;
  display: none;
  font-family: 'NRT Reg', sans-serif;
  transition: display .4s ease;
}

.result.success {
  color: rgb(60, 149, 0);
}

.result.error {
  color: red;
}

.address-input input:checked + label {
  border-color: red;
  color: red;
}

.address-input input[value="value-2"]:checked + label {
  border-color: #0095d2;
  color: #00638a;
}

.address-input:has(input[value="value-2"]:checked) .result.success {
  display: flex;
}

.address-input:has(input:not([value="value-2"]):checked ) .result.error {
  display: flex;
}	
</style>