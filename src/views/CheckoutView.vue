<template>
    <main class="main">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Shop
                    <span></span> Checkout
                </div>
            </div>
        </div>
        <div class="container mb-80 mt-50">
            <div class="row">
                <div class="col-lg-8 mb-40">
                    <h1 class="heading-2 mb-10">Checkout</h1>
                    <div class="d-flex justify-content-between">
                        <h6 class="text-body">There are <span class="text-brand">{{ cart.item.length }}</span> products in your cart</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <div class="row mb-50">
                        <!-- <div class="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                            <div class="toggle_info">
                                <span><i class="fi-rs-user mr-10"></i><span class="text-muted font-lg">Already have an account?</span> <a href="#loginform" data-bs-toggle="collapse" class="collapsed font-lg" aria-expanded="false">Click here to login</a></span>
                            </div>
                            <div class="panel-collapse collapse login_form" id="loginform">
                                <div class="panel-body">
                                    <p class="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                    <form method="post">
                                        <div class="form-group">
                                            <input type="text" name="email" placeholder="Username Or Email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" placeholder="Password">
                                        </div>
                                        <div class="login_footer form-group">
                                            <div class="chek-form">
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="remember" value="">
                                                    <label class="form-check-label" for="remember"><span>Remember me</span></label>
                                                </div>
                                            </div>
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-md" name="login">Log in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-lg-12">
                            <form method="post" class="apply-coupon">
                                <input type="text" placeholder="Enter Coupon Code...">
                                <button class="btn  btn-md" name="login">Apply Coupon</button>
                            </form>
                        </div>
                    </div>
                    <div class="row mb-30">
                        <h4 class="mb-30">Customer Details</h4>
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

                        <button class="btn mt-10" @click="addNewAddress" style="width: 100%;margin: 0 auto">{{ button_text }}</button>

                        <div v-show="is_newaddress">
                            <h4 class="mb-30 mt-30">Add New Address</h4>
                            <div>
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <input type="text" required="" name="fname" placeholder="Address Name *" v-model="new_address.address_name">
                                        <span class="text-danger">{{ error_addressname }}</span>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input type="text" required="" name="lname" placeholder="Customer Name *" v-model="new_address.customer_name">
                                        <span class="text-danger">{{ error_customername }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <textarea rows="5" placeholder="Address" v-model="new_address.address"></textarea>
                                        <span class="text-danger">{{ error_address }}</span>
                                    </div>
                                </div>
                                <div class="row shipping_calculator">
                                    <div class="form-group col-lg-6">
                                        <div class="custom_select">
                                            <select class="form-control select-active" id="country">
                                                <option value="">Select Country...</option>
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
                                        <span class="text-danger">{{ error_country }}</span>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input required="" type="text" name="city" placeholder="City / Town *" v-model="new_address.state">
                                        <span class="text-danger">{{ error_state }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *" v-model="new_address.zip">
                                        <span class="text-danger">{{ error_zip }}</span>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input required="" type="text" name="phone" placeholder="Phone *" v-model="new_address.phone">
                                        <span class="text-danger">{{ error_phone }}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="checkbox">
                                        <div class="custome-checkbox">
                                            <input class="form-check-input" type="checkbox" name="checkbox" id="createaccount" v-model="terms_condition">
                                            <label class="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" for="createaccount"><span>Terms and Condition</span></label>
                                        </div>
                                        <span class="text-danger">{{ error_terms_condition }}</span>
                                    </div>
                                </div>
                                <div id="collapsePassword" class="form-group create-account collapse in">
                                    <div class="row">
                                        <div class="col-lg-12 border p-40" style="background-color: #f2f2f2">
                                            <span class="terms-condition">
                                                <p>Terms and Conditions</p>
                                                <p>
                                                    1. Acceptance of Terms <br>
                                                    By accessing or using Apotik Melawai's website, products, or services (collectively referred to as "the Service"), you agree to comply with and be bound by these Terms and Conditions.
                                                </p><br>

                                                <p>
                                                    2. Use of the Service <br>
                                                    a. You must be at least 18 years old to use the Service. <br>
                                                    b. You agree to use the Service only for lawful purposes and in accordance with any applicable laws and regulations.
                                                </p><br>

                                                <p>
                                                    3. Intellectual Property <br>
                                                    a. All content, trademarks, logos, and intellectual property on the Service are the property of Apotik Melawai or its licensors and protected by copyright and other intellectual property laws. <br>
                                                    b. You may not use, reproduce, distribute, or modify any content from the Service without prior written consent from Apotik Melawai.
                                                </p><br>

                                                <p>
                                                    4. Privacy Policy <br>
                                                    a. Your use of the Service is also governed by our Privacy Policy [link to privacy policy], which outlines how we collect, use, and protect your personal information.
                                                </p><br>

                                                <p>
                                                    5. Disclaimers <br>
                                                    a. The Service is provided "as is" without any warranties, express or implied. Apotik Melawai disclaims all warranties of merchantability, fitness for a particular purpose, and non-infringement. <br>
                                                    b. Apotik Melawai does not guarantee the accuracy, completeness, or reliability of any content on the Service.
                                                </p><br>

                                                <p>
                                                    6. Limitation of Liability <br>
                                                    a. Apotik Melawai shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use or inability to use the Service.
                                                </p>

                                                <p>
                                                    7. Indemnification <br>
                                                    You agree to indemnify and hold Apotik Melawai harmless from any claims, losses, liabilities, expenses, or demands, including reasonable attorney's fees, arising from your use of the Service or your violation of these Terms and Conditions.
                                                </p><br>

                                                <p>
                                                    8. Modifications and Termination <br>
                                                    a. Apotik Melawai reserves the right to modify or discontinue the Service at any time without notice. <br>
                                                    b. Apotik Melawai may terminate your access to the Service for any reason, without prior notice. 
                                                </p><br>

                                                <p>
                                                    9. Governing Law <br>
                                                    These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
                                                </p><br>

                                                <p>
                                                    10. Contact Us <br>
                                                    If you have any questions about these Terms and Conditions, please contact us at [contact email].
                                                </p><br>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ship_detail">
                                    <div class="form-group">
                                        <div class="chek-form">
                                            <div class="custome-checkbox">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="differentaddress" v-model="newsletter">
                                                <label class="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" for="differentaddress"><span>Subscribe News Letter</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseAddress" class="different_address collapse in">
                                        <div class="row">
                                            <div class="form-group col-lg-12">
                                                <input type="text" required="" name="fname" placeholder="Email Address*">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn w-30" @click="saveNewAddress">Save</button>
                        </div>
                        
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="border p-md-4 cart-totals ml-30">
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
                    </div>

                    <div class="border p-40 cart-totals ml-30 mb-50 mt-30">
                        <div class="d-flex align-items-end justify-content-between" style="margin-top: -20px">
                            <h5 class="order-summary">Order Summary</h5>
                        </div>

                        <div class="table-responsive order_table checkout">
                            <table class="table no-border">
                                <tbody>
                                    <tr v-for="prod in cart.item" :key="prod.id">
                                        <td class="image product-thumbnail">
                                            <img style="width: 70px" :src="getProductImg(prod.images)" :alt="prod.images">
                                        </td>
                                        <td>
                                            <h6 class="w-160 mb-5"><router-link :to="{name: 'Product', params: {id: prod.id}}" class="text-heading">{{ prod.name }}</router-link></h6>
                                            <div class="product-rate-cover">
                                                <div class="product-rate d-inline-block">
                                                    <div class="product-rating" :style="{width: prod.rating +'%'}">
                                                    </div>
                                                </div>
                                                <span class="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 class="text-muted pl-20 pr-20">x {{ prod.qty }}</h6>
                                        </td>
                                        <td>
                                            <h4 class="text-summary text-danger" style="font-weight: bolder">Rp. {{ formatPrice(prod.price) }}</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="no-border" style="border: 0;">
                                <tbody>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Subtotal</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-summary text-end">Rp. {{ formatPrice(cart.total) }}</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Discount</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-summary text-end">Rp. {{ formatPrice(cart.discount) }}</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Tax</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-summary text-end">Rp. {{ formatPrice(cart.tax) }}</h4>
                                        </td>
                                    </tr>                         
                                    <tr v-show="cart.current_shipping_price > 0">
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-heading">Shipping</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h4 class="text-summary text-end">Rp. {{ formatPrice(cart.current_shipping_price) }}</h4>
                                        </td> 
                                    </tr> 
                                    <tr v-show="cart.current_shipping_price > 0">
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-summary">Sipping Method</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h5 class="text-summary text-end">{{ cart.current_shipping_provider }} {{ cart.current_shipping_methods }}</h5>
                                        </td> 
                                    </tr> 
                                    <tr v-show="cart.selected_payment_method !== ''">
                                        <td class="cart_total_label zeropadding">
                                            <h6 class="text-summary">Payment Method</h6>
                                        </td>
                                        <td class="cart_total_amount zeropadding">
                                            <h5 class="text-summary text-end">{{ cart.selected_payment_method }}</h5>
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
                                            <h4 class="text-summary text-end">Rp. {{ countGrandTotal() }}</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="payment ml-30">
                        <h4 class="order-summary mb-30">Acceptable Payment</h4>
                        <div class="payments-inputs">
                            <label v-for="pay in payment_methods" :key="pay.id">
                                <input class="radio-payment-input" type="radio" name="payment-radio" @change="cart.selected_payment_method = pay.name">
                                <span class="radio-tile">
                                    <span class="radio-icon">
                                        <img :src="getPaymentImg(pay.images)" alt="">
                                    </span>
                                </span>
                            </label>
                        </div>

                        <a href="#" class="btn btn-fill-out btn-block mt-30">Place an Order<i class="fi-rs-sign-out ml-15"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'CheckoutView',
    data(){
        return{
            is_saving: false,
            is_newaddress: false,
            button_text: 'Add New Address',
            select_all: true,
            setsuccess: false,
            screensize: 0,
            error_addressname: null,
            error_customername: null,
            error_address: null,
            error_phone: null,
            error_state: null,
            error_country: null,
            error_zip: null,
            error_terms_condition: null,
            terms_condition: false,
            newsletter: false,
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
                selected_payment_method: '',
                item: [
                    {id: 0, name: 'Garnier Men Acno Fight', images: 'garnier-acno-fight-1.jpg', price: 33500, discount: 20, qty: 1, status: 'instock', rating: 90, deleted: false, is_selected: true,},
                    {id: 1, name: 'Detol Hand Wash', images: 'detol-hand-wash-1.jpg', price: 40000, discount: 0, qty: 2, status: 'instock', rating: 70, deleted: false, is_selected: true,},
                    {id: 2, name: 'Woods Herbal', images: 'woods-herbal-1.jpg', price: 29000, discount: 10, qty: 1, status: 'instock', rating: 80, deleted: false, is_selected: true,},
                    {id: 3, name: 'Enervon-C 100 Tablet', images: 'enervonc-1.jpg', price: 114500, discount: 5, qty: 1, status: 'instock', rating: 78, deleted: false, is_selected: true,},
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
            ],
            payment_methods: [
                {id: 1, name: 'Bank Transfer', images: 'bank-transfer.png'},
                {id: 2, name: 'Shopee Pay', images: 'shopeepay.png'},
                {id: 3, name: 'Gopay', images: 'gopay.png'},
                {id: 4, name: 'Credit Card', images: 'card.png'},
                {id: 5, name: 'Ovo', images: 'ovo.png'},
                {id: 6, name: 'Link Aja', images: 'link-aja.png'},
                {id: 7, name: 'Indomaret', images: 'indomaret.png'},
                {id: 8, name: 'Alfamart', images: 'alfamart.png'},
            ],
            new_address: {
                id: 0,
                address_name: '',
                customer_name: '',
                phone: '',
                address: '',
                state: '',
                country: '',
                zip: null,
            },
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
        getPaymentImg(filename){
            return '/assets/images/logo/' + filename;
        },
        getProductImg(filename){
            return '/assets/images/products/' + filename;
        },
        formatPrice(value){
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
        addNewAddress(){
            if(!this.is_newaddress) {
                this.is_newaddress = true;
                this.button_text = 'Cancel';
            } else {
                this.is_newaddress = false;
                this.button_text = 'Add New Address';
            }
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
            let val = (count/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        saveNewAddress(){
            if(this.is_saving) return;
            this.is_saving = true;
            var counter = 0;
            let country = document.getElementById('country').value;
            this.new_address.country = country;

            if(this.new_address.address_name === '') {this.error_addressname = 'Please enter Address Name'; counter += 1}

            if(this.new_address.customer_name === '') {this.error_customername = 'Please enter Customer Name'; counter += 1}

            if(this.new_address.address === '') {this.error_address = 'Please enter Address'; counter += 1}

            if(this.new_address.phone === '') {this.error_phone = 'Please enter phone number'; counter += 1}

            if(this.new_address.country === '') {this.error_country = 'Please enter origin country'; counter += 1}
            
            if(this.new_address.state === '') {this.error_state = 'Please enter country state'; counter += 1}
            
            if(this.new_address.zip === null) {this.error_zip = 'Please enter zip code'; counter += 1}
            
            if(!this.terms_condition) {this.error_terms_condition = 'Please accept terms and condition'; counter += 1}

            if(counter > 0) {
                setTimeout(() => {
                    this.error_addressname = null;
                    this.error_customername = null;
                    this.error_address = null;
                    this.error_phone = null;
                    this.error_country = null;
                    this.error_state = null;
                    this.error_zip = null;
                    this.error_terms_condition = null;
                }, 2000);

                return;
            }

            this.shipping_address.forEach((element) => {
                this.new_address.id = element.id + 1.
            });
            this.shipping_address.push(this.new_address);
            this.is_saving = false;
        },
    }
}
</script>

<style>
.terms-condition{
    font-family: 'NRT Reg', sans-serif;
    text-align: justify;
}

.payments-inputs {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: -10px;
}

.payments-inputs > * {
  margin: 6px;
}

.radio-payment-input:checked + .radio-tile {
  border-color: #b22a2e;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #b22a2e;
}

.radio-payment-input:checked + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
  background-color: #b22a2e;
  border-color: #b22a2e;
}

.radio-payment-input:checked + .radio-tile .radio-icon svg {
  fill: #b22a2e;
}

.radio-payment-input:checked + .radio-tile .radio-label {
  color: #b22a2e;
}

.radio-payment-input:focus + .radio-tile {
  border-color: #b22a2e;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #d4777a;
}

.radio-payment-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  min-height: 70px;
  border: 2px solid #f2f2f2;
  background-color: #fff;
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
}

.radio-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
}

.radio-tile:hover {
  border-color: #b22a2e;
}

.radio-tile:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-icon img {
  width: 3rem;
  height: 3rem;
  fill: #494949;
}

.radio-label {
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 13px;
}

.radio-payment-input {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>