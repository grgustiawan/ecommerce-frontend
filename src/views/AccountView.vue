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
                    <img src="" alt="" />
                  </div>
                  <ul class="nav flex-column" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="dashboard-tab"
                        data-bs-toggle="tab"
                        href="#dashboard"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                        ><i class="fi-rs-settings-sliders mr-10"></i
                        >Dashboard</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="orders-tab"
                        data-bs-toggle="tab"
                        href="#orders"
                        role="tab"
                        aria-controls="orders"
                        aria-selected="false"
                        ><i class="fi-rs-shopping-bag mr-10"></i>Orders</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="track-orders-tab"
                        data-bs-toggle="tab"
                        href="#track-orders"
                        role="tab"
                        aria-controls="track-orders"
                        aria-selected="false"
                        ><i class="fi-rs-shopping-cart-check mr-10"></i>Track
                        Your Order</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="address-tab"
                        data-bs-toggle="tab"
                        href="#address"
                        role="tab"
                        aria-controls="address"
                        aria-selected="true"
                        ><i class="fi-rs-marker mr-10"></i>My Address</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="account-detail-tab"
                        data-bs-toggle="tab"
                        href="#account-detail"
                        role="tab"
                        aria-controls="account-detail"
                        aria-selected="true"
                        ><i class="fi-rs-user mr-10"></i>Account details</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" @click="logout"
                        ><i class="fi-rs-sign-out mr-10"></i>Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9">
                <div class="tab-content account dashboard-content pl-50">
                  <div
                    class="tab-pane fade active show"
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="mb-0">Hello {{ dataUser.firstname }}</h3>
                      </div>
                      <div class="card-body">
                        <p>
                          From your account dashboard. you can easily check
                          &amp; view your <a href="#">recent orders</a>,<br />
                          manage your
                          <a href="#">shipping and billing addresses</a> and
                          <a href="#"
                            >edit your password and account details.</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="orders"
                    role="tabpanel"
                    aria-labelledby="orders-tab">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="mb-0">Your Orders</h3>
                      </div>
                      <div
                        style="
                          width: 100%;
                          display: flex;
                          padding: 10px;
                          flex-direction: row;
                          flex-wrap: wrap;
                          align-items: center;
                          gap: 10px;
                          margin-bottom: 10px;
                        ">
                        <strong
                          class="text-summary"
                          style="font-weight: bolder; color: #000"
                          >Status</strong
                        >
                        <div
                          style="
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            gap: 10px;
                            margin-left: 20px;
                          ">
                          <div
                            style="
                              height: 40px;
                              border: 1px solid #b22a2e;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              padding: 0 10px;
                              cursor: pointer;
                              border-radius: 3px;
                            ">
                            All
                          </div>
                          <div
                            style="
                              height: 40px;
                              border: 1px solid #b22a2e;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              padding: 0 10px;
                              cursor: pointer;
                              border-radius: 3px;
                            ">
                            On Process
                          </div>
                          <div
                            style="
                              height: 40px;
                              border: 1px solid #b22a2e;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              padding: 0 10px;
                              cursor: pointer;
                              border-radius: 3px;
                            ">
                            Completed
                          </div>
                          <div
                            style="
                              height: 40px;
                              border: 1px solid #b22a2e;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              padding: 0 10px;
                              cursor: pointer;
                              border-radius: 3px;
                            ">
                            Canceled
                          </div>
                        </div>
                      </div>
                      <div
                        style="
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                          left: 0;
                          margin-top: 15px;
                        "
                        v-for="order in customer.order"
                        :key="order.id">
                        <div
                          style="
                            width: 100%;
                            margin: 5px 10px;
                            border: 1px solid #f3f3f3;
                            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.115),
                              0 1px 2px rgba(102, 102, 102, 0.24);
                            border-radius: 5px;
                          ">
                          <div
                            style="
                              display: flex;
                              align-items: center;
                              padding: 10px 20px;
                              flex-direction: row;
                              flex-wrap: wrap;
                              justify-content: start;
                            ">
                            <img
                              style="width: 24px"
                              src="/assets/images/theme/icons/invoice.svg" />
                            <span
                              class="text-summary"
                              style="
                                color: #4f4f4f;
                                font-size: 14pt;
                                margin-top: 5px;
                                margin-left: 10px;
                                font-weight: bold;
                              "
                              >Shopping</span
                            >
                            <span
                              class="text-summary"
                              style="
                                color: #4f4f4f;
                                font-size: 12pt;
                                margin-top: 7.5px;
                                margin-left: 30px;
                              "
                              >11 August 2023</span
                            >
                            <div
                              style="
                                width: 100px;
                                height: 25px;
                                background-color: rgb(127, 255, 187);
                                border-radius: 5px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: #fff;
                                margin-left: 30px;
                              ">
                              Delivering
                            </div>
                            <span
                              style="
                                color: #4f4f4f;
                                font-size: 100%;
                                margin-top: 5px;
                                margin-left: 10px;
                                font-weight: 400;
                                margin-left: 30px;
                              "
                              >{{ order.invoice }}</span
                            >
                          </div>
                          <div
                            style="
                              width: 100%;
                              padding: 0 20px;
                              display: flex;
                              align-items: center;
                              flex-direction: row;
                              gap: 10px;
                            ">
                            <img
                              style="width: 20px; margin-left: 3px"
                              src="/assets/images/theme/logo-box.png"
                              alt="" />
                            <span
                              class="text-summary"
                              style="
                                font-size: 14pt;
                                margin-top: 7px;
                                font-weight: bold;
                                color: #313131;
                              "
                              >{{ order.seller }}</span
                            >
                          </div>
                          <div
                            style="
                              position: relative;
                              width: 100%;
                              display: flex;
                              flex-direction: row;
                            ">
                            <div style="width: 25%; padding: 10px">
                              <img
                                style="width: 80%"
                                :src="getProductImg(order.item[0].images)"
                                alt="" />
                            </div>
                            <div
                              style="
                                width: 75%;
                                padding-top: 20px;
                                display: flex;
                                flex-direction: column;
                              ">
                              <span
                                ><a
                                  href=""
                                  class="text-summary"
                                  style="font-size: 16pt; color: #292929"
                                  >{{ order.item[0].name }}</a
                                ></span
                              >
                              <span class="text-summary"
                                >{{ order.item[0].qty }}
                                <small style="font-size: 10pt">x</small> Rp.
                                {{ formatPrice(order.item[0].price) }}</span
                              >
                              <br />
                              <span class="text-success"
                                >+{{ order.item.length - 1 }} Others
                                Product</span
                              >
                              <span
                                class="text-danger text-summary"
                                style="font-weight: bolder"
                                >Rp. {{ formatPrice(order.grand) }} Total</span
                              >
                              <div
                                style="
                                  position: absolute;
                                  bottom: 20px;
                                  right: 10px;
                                  display: flex;
                                  flex-direction: row-reverse;
                                  gap: 5px;
                                  flex-shrink: inherit;
                                ">
                                <button class="btn" style="border-radius: 10px">
                                  ...
                                </button>
                                <button class="btn">Tracking</button>
                                <button class="btn">Transaction Detail</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="track-orders"
                    role="tabpanel"
                    aria-labelledby="track-orders-tab">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="mb-0">Orders tracking</h3>
                      </div>
                      <div class="card-body contact-from-area">
                        <p>
                          To track your order please enter your OrderID in the
                          box below and press "Track" button. This was given to
                          you on your receipt and in the confirmation email you
                          should have received.
                        </p>
                        <div class="row">
                          <div class="col-lg-8">
                            <form
                              class="contact-form-style mt-30 mb-50"
                              action="#"
                              method="post">
                              <div class="input-style mb-20">
                                <label>Order ID</label>
                                <input
                                  name="order-id"
                                  placeholder="Found in your order confirmation email"
                                  type="text" />
                              </div>
                              <div class="input-style mb-20">
                                <label>Billing email</label>
                                <input
                                  name="billing-email"
                                  placeholder="Email you used during checkout"
                                  type="email" />
                              </div>
                              <button
                                class="submit submit-auto-width"
                                type="submit">
                                Track
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="address"
                    role="tabpanel"
                    aria-labelledby="address-tab">
                    <div class="d-flex text-end w-100 justify-content-end mb-3">
                      <button
                        type="button"
                        class="button-create"
                        @click="showCreates">
                        Add New Address
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card mb-3 mb-lg-0">
                          <div class="card-header">
                            <h3 class="mb-0">Primary Address</h3>
                          </div>
                          <div class="card-body">
                            <address
                              v-for="first in dataUser.address"
                              :key="first.priority">
                              {{ first.name }}<br />
                              {{ first.street }}, {{ first.subdistrict }},
                              <br />{{ first.district }}, {{ first.city }},
                              {{ first.state }}, <br />{{ first.country }},
                              {{ first.zip }} <br />
                              <a href="#" class="btn-small">Edit</a>
                            </address>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-header">
                            <h5 class="mb-0">Shipping Address</h5>
                          </div>
                          <div class="card-body">
                            <address
                              v-for="first in dataUser.secondAddress"
                              :key="first.priority"
                              class="mb-3">
                              {{ first.name }}<br />
                              {{ first.street }}, {{ first.subdistrict }},
                              <br />{{ first.district }}, {{ first.city }},
                              {{ first.state }}, <br />{{ first.country }},
                              {{ first.zip }} <br />
                              <a @click="showUpdates(first)" class="btn-small"
                                >Edit</a
                              >
                              <a
                                @click="deleteAddress(first.id, first.priority)"
                                class="btn-small ps-3"
                                >Delete</a
                              >
                              <a href="#" class="btn-small ps-3"
                                >Set As Primary</a
                              >
                            </address>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="account-detail"
                    role="tabpanel"
                    aria-labelledby="account-detail-tab">
                    <div class="card">
                      <div class="card-header">
                        <h5>Account Details</h5>
                      </div>
                      <div class="card-body">
                        <form method="post" name="enq">
                          <div class="row">
                            <div class="form-group col-md-12">
                              <label>NIK <span class="required">*</span></label>
                              <input
                                required=""
                                class="form-control"
                                name="nik"
                                v-model="dataUser.nik"
                                type="number"
                                disabled="true" />
                            </div>
                            <div class="form-group col-md-6">
                              <label
                                >First Name
                                <span class="required">*</span></label
                              >
                              <input
                                required=""
                                class="form-control"
                                name="firstname"
                                v-model="dataUser.firstname"
                                type="text"
                                disabled="true" />
                            </div>
                            <div class="form-group col-md-6">
                              <label
                                >Last Name
                                <span class="required">*</span></label
                              >
                              <input
                                required=""
                                class="form-control"
                                name="lastname"
                                v-model="dataUser.lastname"
                                type="text"
                                disabled="true" />
                            </div>
                            <div class="form-group col-md-12">
                              <label
                                >Email Address
                                <span class="required">*</span></label
                              >
                              <input
                                required=""
                                class="form-control"
                                name="email"
                                v-model="dataUser.email"
                                type="email"
                                disabled="true" />
                            </div>
                            <div class="form-group col-md-12">
                              <label
                                >Phone Number
                                <span class="required">*</span></label
                              >
                              <input
                                required=""
                                class="form-control"
                                name="phone"
                                v-model="dataUser.phone"
                                type="tel"
                                disabled="true" />
                            </div>
                            <div class="form-group col-md-12">
                              <label
                                >Birth Date
                                <span class="required">*</span></label
                              >
                              <input
                                required=""
                                class="form-control"
                                name="birthDate"
                                v-model="dataUser.birth_date"
                                type="date"
                                disabled="true" />
                            </div>
                            <div class="form-group col-md-12">
                              <label
                                >Birth Place
                                <span class="required">*</span></label
                              >
                              <input
                                required=""
                                class="form-control"
                                name="birthPlace"
                                v-model="dataUser.birth_place"
                                type="text"
                                disabled="true" />
                            </div>
                            <div class="col-md-12">
                              <button
                                type="submit"
                                class="btn btn-fill-out submit font-weight-bold"
                                name="submit"
                                value="Submit"
                                disabled="true">
                                Save Change
                              </button>
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

  <div class="modal-container" v-if="showCreate">
    <div class="overlay"></div>
    <div class="alert-dialog shake-r">
      <div class="btn-close" style="z-index: 10" @click="closeButton()"></div>

      <div
        style="
          position: relative;
          width: 100%;
          height: 50px;
          border-bottom: 2px solid var(--canvas);
        ">
        <span class="alert-title">Create New Address</span>
      </div>

      <div
        style="
          position: relative;
          width: 100%;
          display: flex;
          border-bottom: 2px solid var(--canvas);
          height: 80%;
          overflow-y: scroll;
        ">
        <div class="container m-3">
          <div class="row">
            <div class="mb-3">
              <label for="name" class="fw-bold text-secondary form-label"
                >Name<span class="text-danger"
                  >* {{ isError.name }}</span
                ></label
              >
              <input
                type="text"
                class="form-control"
                style="max-height: 40px"
                v-model="name"
                name="name" />
            </div>
            <div class="mb-3">
              <label for="address" class="fw-bold text-secondary form-label"
                >Address<span class="text-danger"
                  >* {{ isError.address }}</span
                ></label
              >
              <textarea
                type="text"
                class="form-control"
                rows="4"
                cols="50"
                v-model="address"
                name="address"></textarea>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-lg-6">
                  <label for="state" class="fw-bold text-secondary form-label"
                    >State<span class="text-danger"
                      >* {{ isError.state }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="state"
                    style="max-height: 40px"
                    @change="selectCity()">
                    <option :value="dnull">Choose...</option>
                    <option
                      v-for="prov in provinsi"
                      :key="prov.id"
                      :value="{ id: prov.id, nama: prov.text }">
                      {{ prov.text }}
                    </option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label for="city" class="fw-bold text-secondary form-label"
                    >City<span class="text-danger"
                      >* {{ isError.city }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="city"
                    style="max-height: 40px"
                    @change="selectSubdis()">
                    <option :value="dnull">Choose...</option>
                    <option
                      v-for="kt in kota"
                      :key="kt.id"
                      :value="{ id: kt.id, nama: kt.text }">
                      {{ kt.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-lg-6">
                  <label
                    for="subdistrict"
                    class="fw-bold text-secondary form-label"
                    >Subdistrict<span class="text-danger"
                      >* {{ isError.subdistrict }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="subdistrict"
                    style="max-height: 40px"
                    @change="selectWard()">
                    <option :value="dnull">Choose...</option>
                    <option
                      v-for="kec in kecamatan"
                      :key="kec.id"
                      :value="{ id: kec.id, nama: kec.text }">
                      {{ kec.text }}
                    </option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label for="ward" class="fw-bold text-secondary form-label"
                    >Ward<span class="text-danger"
                      >* {{ isError.ward }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="ward"
                    style="max-height: 40px"
                    @change="selectZip()">
                    <option :value="dnull">Choose...</option>
                    <option
                      v-for="kel in kelurahan"
                      :key="kel.id"
                      :value="{ id: kel.id, nama: kel.text }">
                      {{ kel.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-lg-4">
                  <label for="zip" class="fw-bold text-secondary form-label"
                    >Zip Code<span class="text-danger"
                      >* {{ isError.zip }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="zip"
                    style="max-height: 40px">
                    <option :value="dnull">Choose...</option>
                    <option
                      v-for="kp in kodePos"
                      :key="kp.id"
                      :value="{ id: kp.id, nama: kp.text }">
                      {{ kp.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="alert-button">
        <button class="btn-theme" @click="addressCreate()">
          <span v-if="!is_proccess">Confirm</span>
          <span
            v-if="is_proccess"
            class="spinner-border"
            role="status"
            style="width: 1rem; height: 1rem"></span>
        </button>

        <button class="btn-dangers" @click="closeButton()">
          <span v-if="!is_proccess">Cancel</span
          ><span
            v-if="is_proccess"
            class="spinner-border"
            role="status"
            style="width: 1rem; height: 1rem"></span>
        </button>
      </div>
    </div>
  </div>

  <div class="modal-container" v-if="showUpdate">
    <div class="overlay"></div>
    <div class="alert-dialog shake-r">
      <div class="btn-close" style="z-index: 10" @click="closeButton()"></div>

      <div
        style="
          position: relative;
          width: 100%;
          height: 50px;
          border-bottom: 2px solid var(--canvas);
        ">
        <span class="alert-title">Create New Address</span>
      </div>

      <div
        style="
          position: relative;
          width: 100%;
          display: flex;
          border-bottom: 2px solid var(--canvas);
          height: 80%;
          overflow-y: scroll;
        ">
        <div class="container m-3">
          <div class="row">
            <div class="mb-3">
              <label for="name" class="fw-bold text-secondary form-label"
                >Name<span class="text-danger"
                  >* {{ isError.name }}</span
                ></label
              >
              <input
                type="text"
                class="form-control"
                style="max-height: 40px"
                v-model="name"
                name="name" />
            </div>
            <div class="mb-3">
              <label for="address" class="fw-bold text-secondary form-label"
                >Address<span class="text-danger"
                  >* {{ isError.address }}</span
                ></label
              >
              <textarea
                type="text"
                class="form-control"
                rows="4"
                cols="50"
                v-model="address"
                name="address"></textarea>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-lg-6">
                  <label for="state" class="fw-bold text-secondary form-label"
                    >State<span class="text-danger"
                      >* {{ isError.state }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="state"
                    style="max-height: 40px"
                    @change="selectCity()">
                    <option
                      v-for="prov in provinsi"
                      :key="prov.id"
                      :value="{ id: prov.id, nama: prov.text }">
                      {{ prov.text }}
                    </option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label for="city" class="fw-bold text-secondary form-label"
                    >City<span class="text-danger"
                      >* {{ isError.city }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="city"
                    style="max-height: 40px"
                    @change="selectSubdis()">
                    <option
                      v-for="kt in kota"
                      :key="kt.id"
                      :value="{ id: kt.id, nama: kt.text }">
                      {{ kt.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-lg-6">
                  <label
                    for="subdistrict"
                    class="fw-bold text-secondary form-label"
                    >Subdistrict<span class="text-danger"
                      >* {{ isError.subdistrict }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="subdistrict"
                    style="max-height: 40px"
                    @change="selectWard()">
                    <option
                      v-for="kec in kecamatan"
                      :key="kec.id"
                      :value="{ id: kec.id, nama: kec.text }">
                      {{ kec.text }}
                    </option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label for="ward" class="fw-bold text-secondary form-label"
                    >Ward<span class="text-danger"
                      >* {{ isError.ward }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="ward"
                    style="max-height: 40px"
                    @change="selectZip()">
                    <option
                      v-for="kel in kelurahan"
                      :key="kel.id"
                      :value="{ id: kel.id, nama: kel.text }">
                      {{ kel.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-lg-4">
                  <label for="zip" class="fw-bold text-secondary form-label"
                    >Zip Code<span class="text-danger"
                      >* {{ isError.zip }}</span
                    ></label
                  >
                  <select
                    class="form-control"
                    v-model="zip"
                    style="max-height: 40px">
                    <option
                      v-for="kp in kodePos"
                      :key="kp.id"
                      :value="{ id: kp.id, nama: kp.text }">
                      {{ kp.text }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="alert-button">
        <button class="btn-theme" @click="addressUpdate()">
          <span v-if="!is_proccess">Confirm</span>
          <span
            v-if="is_proccess"
            class="spinner-border"
            role="status"
            style="width: 1rem; height: 1rem"></span>
        </button>

        <button class="btn-dangers" @click="closeButton()">
          <span v-if="!is_proccess">Cancel</span
          ><span
            v-if="is_proccess"
            class="spinner-border"
            role="status"
            style="width: 1rem; height: 1rem"></span>
        </button>
      </div>
    </div>
  </div>

  <notif :message="message" :type="type" v-if="showNotif"></notif>
</template>

<script>
import store from "@/store";
import axios from "axios";
import notif from "@/components/Message.vue";
export default {
  name: "AccountView",
  components: {
    notif,
  },
  data() {
    return {
      dataUser: {
        id: null,
        firstname: null,
        lastname: null,
        nik: null,
        phone: null,
        email: null,
        gender: null,
        birth_date: null,
        birth_place: null,
        image: null,
        roleid: null,
        isactive: null,
        isverif: null,
        iskyc: null,
        lastlogin: null,
        createdat: null,
        updatedat: null,
        address: null,
        secondAddress: null,
      },
      showCreate: false,
      showUpdate: false,
      is_proccess: false,
      name: null,
      address: null,
      state: null,
      city: null,
      subdistrict: null,
      ward: null,
      zip: null,
      priority: null,
      id: null,
      isError: {
        name: null,
        address: null,
        state: null,
        city: null,
        subdistrict: null,
        ward: null,
        zip: null,
      },
      cntErr: 0,
      /*Data notif*/
      showNotif: false,
      message: "",
      type: "",
      /*api address id*/
      provinsi: [],
      kota: [],
      kecamatan: [],
      kelurahan: [],
      kodePos: [],
      dnull: null,
      customer: {
        order: [
          {
            invoice: "INV/20230809/APT/47300",
            date: "09/08/2023",
            status: "Delivering",
            quantity: 5,
            total: 257000,
            discount: 0,
            tax: 25700,
            grand: 294700,
            current_shipping_price: 12000,
            current_shipping_provider: "JNE",
            current_shipping_methods: "REG",
            selected_shipping_address_name: "Home",
            selected_shipping_name: "Admin Melawai",
            selected_shipping_phone: "+(62) 83812640683",
            selected_shipping_address:
              "JL. KS Tubun 31, Petamburan, Jakarta Pusat",
            selected_shipping_state: "Jakarta",
            selected_shipping_country: "Indonesia",
            selected_shipping_zip: 112091,
            selected_payment_method: "Bank Transfer",
            invoice_name: "Customer Melawai",
            invoice_email: "admin@optikmelawai.id",
            customer_id: "ce3e6106-3656-11ee-be56-0242ac120002",
            seller: "Apotik Melawai",
            item: [
              {
                id: 0,
                name: "Garnier Men Acno Fight",
                images: "garnier-acno-fight-1.jpg",
                price: 33500,
                discount: 20,
                qty: 1,
                status: "instock",
                rating: 90,
                deleted: false,
                is_selected: true,
              },
              {
                id: 1,
                name: "Detol Hand Wash",
                images: "detol-hand-wash-1.jpg",
                price: 40000,
                discount: 0,
                qty: 2,
                status: "instock",
                rating: 70,
                deleted: false,
                is_selected: true,
              },
              {
                id: 2,
                name: "Woods Herbal",
                images: "woods-herbal-1.jpg",
                price: 29000,
                discount: 10,
                qty: 1,
                status: "instock",
                rating: 80,
                deleted: false,
                is_selected: true,
              },
              {
                id: 3,
                name: "Enervon-C 100 Tablet",
                images: "enervonc-1.jpg",
                price: 114500,
                discount: 5,
                qty: 1,
                status: "instock",
                rating: 78,
                deleted: false,
                is_selected: true,
              },
            ],
          },
          {
            invoice: "INV/20230809/APT/54100",
            date: "09/08/2023",
            status: "Delivering",
            quantity: 5,
            total: 257000,
            discount: 0,
            tax: 25700,
            grand: 294700,
            current_shipping_price: 12000,
            current_shipping_provider: "JNE",
            current_shipping_methods: "REG",
            selected_shipping_address_name: "Home",
            selected_shipping_name: "Admin Melawai",
            selected_shipping_phone: "+(62) 83812640683",
            selected_shipping_address:
              "JL. KS Tubun 31, Petamburan, Jakarta Pusat",
            selected_shipping_state: "Jakarta",
            selected_shipping_country: "Indonesia",
            selected_shipping_zip: 112091,
            selected_payment_method: "Bank Transfer",
            invoice_name: "Customer Melawai",
            invoice_email: "admin@optikmelawai.id",
            customer_id: "ce3e6106-3656-11ee-be56-0242ac120002",
            seller: "Apotik Melawai",
            item: [
              {
                id: 1,
                name: "Detol Hand Wash",
                images: "detol-hand-wash-1.jpg",
                price: 40000,
                discount: 0,
                qty: 2,
                status: "instock",
                rating: 70,
                deleted: false,
                is_selected: true,
              },
              {
                id: 0,
                name: "Garnier Men Acno Fight",
                images: "garnier-acno-fight-1.jpg",
                price: 33500,
                discount: 20,
                qty: 1,
                status: "instock",
                rating: 90,
                deleted: false,
                is_selected: true,
              },
              {
                id: 2,
                name: "Woods Herbal",
                images: "woods-herbal-1.jpg",
                price: 29000,
                discount: 10,
                qty: 1,
                status: "instock",
                rating: 80,
                deleted: false,
                is_selected: true,
              },
              {
                id: 3,
                name: "Enervon-C 100 Tablet",
                images: "enervonc-1.jpg",
                price: 114500,
                discount: 5,
                qty: 1,
                status: "instock",
                rating: 78,
                deleted: false,
                is_selected: true,
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.dataLogin();
  },
  methods: {
    async dataLogin() {
      try {
        if (store.getters.GET_AUTH_TOKEN) {
          const { data } = await axios.get(this.$user + "/address", {
            headers: {
              Authorization: store.getters.GET_AUTH_TOKEN,
              userid: store.getters.GET_AUTH_INFO.id,
            },
          });
          const responses = data.data;
          const second = [];
          const primary = [];
          responses.forEach((el) => {
            if (el.priority === 1) {
              primary.push(el);
            } else {
              second.push(el);
            }
          });
          this.dataUser = {
            id: store.getters.GET_AUTH_INFO.id,
            firstname: store.getters.GET_AUTH_INFO.firstname,
            lastname: store.getters.GET_AUTH_INFO.lastname,
            nik: store.getters.GET_AUTH_INFO.nik,
            phone: store.getters.GET_AUTH_INFO.phone,
            email: store.getters.GET_AUTH_INFO.email,
            gender: store.getters.GET_AUTH_INFO.gender,
            birth_date: store.getters.GET_AUTH_INFO.birth_date,
            birth_place: store.getters.GET_AUTH_INFO.birth_place,
            image: store.getters.GET_AUTH_INFO.image,
            roleid: store.getters.GET_AUTH_INFO.roleid,
            isactive: store.getters.GET_AUTH_INFO.isactive,
            isverif: store.getters.GET_AUTH_INFO.isverif,
            iskyc: store.getters.GET_AUTH_INFO.iskyc,
            lastlogin: store.getters.GET_AUTH_INFO.lastlogin,
            createdat: store.getters.GET_AUTH_INFO.createdat,
            updatedat: store.getters.GET_AUTH_INFO.updatedat,
            address: primary,
            secondAddress: second,
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
    async showCreates() {
      this.provinsi = [];
      const { data } = await axios.get(
        "https://alamat.thecloudalert.com/api/provinsi/get/",
        {}
      );
      this.provinsi = data.result;

      this.showCreate = true;
      this.name = null;
      this.address = null;
      this.state = null;
      this.city = null;
      this.subdistrict = null;
      this.ward = null;
      this.zip = null;
      this.isError = {
        name: null,
        address: null,
        state: null,
        city: null,
        subdistrict: null,
        ward: null,
        zip: null,
      };
    },
    async selectCity() {
      this.kota = [];
      this.kecamatan = [];
      this.kelurahan = [];
      this.kodePos = [];
      const { data } = await axios.get(
        "https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=" +
          this.state.id,
        {}
      );
      this.kota = data.result;
    },
    async selectSubdis() {
      this.kecamatan = [];
      this.kelurahan = [];
      this.kodePos = [];
      const { data } = await axios.get(
        "https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=" +
          this.city.id,
        {}
      );
      this.kecamatan = data.result;
    },
    async selectWard() {
      this.kelurahan = [];
      this.kodePos = [];
      const { data } = await axios.get(
        "https://alamat.thecloudalert.com/api/kelurahan/get/?d_kecamatan_id=" +
          this.subdistrict.id,
        {}
      );
      this.kelurahan = data.result;
    },
    async selectZip() {
      this.kodePos = [];
      const { data } = await axios.get(
        "https://alamat.thecloudalert.com/api/kodepos/get/?d_kabkota_id=" +
          this.city.id +
          "&d_kecamatan_id=" +
          this.subdistrict.id,
        {}
      );
      this.kodePos = data.result;
    },
    async addressCreate() {
      try {
        if (this.is_proccess) return;
        this.is_proccess = true;

        this.isError = {
          name: null,
          address: null,
          state: null,
          city: null,
          subdistrict: null,
          ward: null,
          zip: null,
        };
        if (!this.name) {
          this.is_proccess = false;
          this.isError.name = "Name address is required";
          this.cntErr += 1;
        }
        if (!this.address) {
          this.is_proccess = false;
          this.isError.address = "Address is required";
          this.cntErr += 1;
        }
        if (!this.state) {
          this.is_proccess = false;
          this.isError.state = "State is required";
          this.cntErr += 1;
        }
        if (!this.city) {
          this.is_proccess = false;
          this.isError.city = "City name is required";
          this.cntErr += 1;
        }
        if (!this.subdistrict) {
          this.is_proccess = false;
          this.isError.subdistrict = "Sub District is required";
          this.cntErr += 1;
        }
        if (!this.ward) {
          this.is_proccess = false;
          this.isError.ward = "Ward is required";
          this.cntErr += 1;
        }
        if (!this.zip) {
          this.is_proccess = false;
          this.isError.zip = "Zip code is required";
          this.cntErr += 1;
        }
        if (this.cntErr > 0) {
          return;
        }
        const addData = {
          priority: "2",
          userid: this.dataUser.id,
          name: this.name,
          country: "Indonesia",
          state: this.state.nama,
          city: this.city.nama,
          district: this.subdistrict.nama,
          subdistrict: this.ward.nama,
          zip: String(this.zip.nama),
          street: this.address,
          isactive: true,
        };
        await axios.post(this.$user + "/address", addData, {
          headers: {
            Authorization: this.$store.getters.GET_AUTH_TOKEN,
            userid: store.getters.GET_AUTH_INFO.id,
          },
        });
        this.message = " Create address successfully";
        this.showNotif = true;
        this.type = "success";
        setTimeout(() => {
          this.message = "";
          this.showNotif = false;
          this.type = "";
          this.is_proccess = false;
          window.location.reload();
        }, 1500);
      } catch (error) {
        this.message = " Create address failed";
        this.showNotif = true;
        this.type = "error";
        setTimeout(() => {
          this.message = "";
          this.showNotif = false;
          this.type = "";
          this.is_proccess = false;
        }, 1500);
        console.log(error);
      }
    },
    async deleteAddress(id, priority) {
      try {
        if (this.is_proccess) return;
        this.is_proccess = true;
        const deleteData = {
          id: id,
          userid: this.dataUser.id,
          priority: priority,
        };
        await axios.delete(this.$user + "/address", {
          data: deleteData,
          headers: {
            Authorization: this.$store.getters.GET_AUTH_TOKEN,
          },
        });
        this.message = " Delete address successfully";
        this.showNotif = true;
        this.type = "success";
        setTimeout(() => {
          this.message = "";
          this.showNotif = false;
          this.type = "";
          this.is_proccess = false;
          window.location.reload();
        }, 1500);
      } catch (error) {
        this.message = " Delete address failed";
        this.showNotif = true;
        this.type = "error";
        setTimeout(() => {
          this.message = "";
          this.showNotif = false;
          this.type = "";
          this.is_proccess = false;
        }, 1500);
        console.log(error);
      }
    },
    async showUpdates(dataAddress) {
      this.provinsi = [];
      this.kota = [];
      this.kecamatan = [];
      this.kelurahan = [];
      this.kodePos = [];

      //Get provinsi
      const { data } = await axios.get(
        "https://alamat.thecloudalert.com/api/provinsi/get/",
        {}
      );
      this.provinsi = data.result;
      this.provinsi.forEach((el) => {
        if (el.text === dataAddress.state) {
          this.state = {
            id: el.id,
            nama: el.text,
          };
        }
      });
      //Get Kota
      await axios
        .get(
          "https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=" +
            this.state.id
        )
        .then((response) => {
          if (this.state) {
            this.kota = response.data.result;
            this.kota.forEach((el) => {
              if (el.text === dataAddress.city) {
                this.city = {
                  id: el.id,
                  nama: el.text,
                };
              }
            });
          }
        });
      //Get Kecamatan
      await axios
        .get(
          "https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=" +
            this.city.id
        )
        .then((response) => {
          if (this.city) {
            this.kecamatan = response.data.result;
            this.kecamatan.forEach((el) => {
              if (el.text === dataAddress.district) {
                this.subdistrict = {
                  id: el.id,
                  nama: el.text,
                };
              }
            });
          }
        });

      //Get Kelurahan
      await axios
        .get(
          "https://alamat.thecloudalert.com/api/kelurahan/get/?d_kecamatan_id=" +
            this.subdistrict.id
        )
        .then((response) => {
          if (this.subdistrict) {
            this.kelurahan = response.data.result;
            this.kelurahan.forEach((el) => {
              if (el.text === dataAddress.subdistrict) {
                this.ward = {
                  id: el.id,
                  nama: el.text,
                };
              }
            });
          }
        });

      //Get Kode Pos
      await axios
        .get(
          "https://alamat.thecloudalert.com/api/kodepos/get/?d_kabkota_id=" +
            this.city.id +
            "&d_kecamatan_id=" +
            this.subdistrict.id
        )
        .then((response) => {
          if (this.city && this.subdistrict) {
            this.kodePos = response.data.result;
            this.kodePos.forEach((el) => {
              if (el.text === String(dataAddress.zip)) {
                this.zip = {
                  id: el.id,
                  nama: el.text,
                };
              }
            });
          }
        });

      this.showUpdate = true;
      this.name = dataAddress.name;
      this.address = dataAddress.street;
      this.priority = dataAddress.priority;
      this.id = dataAddress.id;
      this.isError = {
        name: null,
        address: null,
        state: null,
        city: null,
        subdistrict: null,
        ward: null,
        zip: null,
      };
    },
    async addressUpdate() {
      try {
        if (this.is_proccess) return;
        this.is_proccess = true;

        this.isError = {
          name: null,
          address: null,
          state: null,
          city: null,
          subdistrict: null,
          ward: null,
          zip: null,
        };
        if (!this.name) {
          this.is_proccess = false;
          this.isError.name = "Name address is required";
          this.cntErr += 1;
        }
        if (!this.address) {
          this.is_proccess = false;
          this.isError.address = "Address is required";
          this.cntErr += 1;
        }
        if (!this.state) {
          this.is_proccess = false;
          this.isError.state = "State is required";
          this.cntErr += 1;
        }
        if (!this.city) {
          this.is_proccess = false;
          this.isError.city = "City name is required";
          this.cntErr += 1;
        }
        if (!this.subdistrict) {
          this.is_proccess = false;
          this.isError.subdistrict = "Sub District is required";
          this.cntErr += 1;
        }
        if (!this.ward) {
          this.is_proccess = false;
          this.isError.ward = "Ward is required";
          this.cntErr += 1;
        }
        if (!this.zip) {
          this.is_proccess = false;
          this.isError.zip = "Zip code is required";
          this.cntErr += 1;
        }
        if (!this.id && !this.priority) {
          this.is_proccess = false;
          this.isError.name = "Data tidak valid";
          this.cntErr += 1;
        }
        if (this.cntErr > 0) {
          return;
        }
        const putData = {
          id: this.id,
          priority: this.priority,
          userid: this.dataUser.id,
          name: this.name,
          country: "Indonesia",
          state: this.state.nama,
          city: this.city.nama,
          district: this.subdistrict.nama,
          subdistrict: this.ward.nama,
          zip: String(this.zip.nama),
          street: this.address,
          isactive: true,
        };
        await axios.put(this.$user + "/address", putData, {
          headers: {
            Authorization: this.$store.getters.GET_AUTH_TOKEN,
            userid: store.getters.GET_AUTH_INFO.id,
          },
        });
        this.message = " Update address successfully";
        this.showNotif = true;
        this.type = "success";
        setTimeout(() => {
          this.message = "";
          this.showNotif = false;
          this.type = "";
          this.is_proccess = false;
          window.location.reload();
        }, 1500);
      } catch (error) {
        this.message = " Update address failed";
        this.showNotif = true;
        this.type = "error";
        setTimeout(() => {
          this.message = "";
          this.showNotif = false;
          this.type = "";
          this.is_proccess = false;
        }, 1500);
        console.log(error);
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getProductImg(filename) {
      return "/assets/images/products/" + filename;
    },
    closeButton() {
      this.showCreate = false;
      this.showUpdate = false;
    },
    logout() {
      const data = {
        id: String(this.$store.getters.GET_AUTH_INFO.id),
        access_token: this.$store.getters.GET_AUTH_TOKEN,
      };

      this.$store
        .dispatch("LOGOUT", data)
        .then(() => {
          window.location.href = "/login";
        })
        .catch(() => {
          window.location.href = "/login";
        });
    },
  },
};
</script>

<style scoped>
.button-create {
  color: #fff;
  background-color: #8f171b;
  border: none;
  height: 2.5rem;
  border-radius: 0.7rem;
  padding: 0.5rem;
  transition: 0.3s;
}
.button-create:hover {
  font-weight: 500;
  color: #8f171b;
  background-color: #fff;
  border: 1.5px solid #8f171b;
}

/*Style Modal*/
.btn-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 12pt;
  cursor: pointer;
  transition: all 0.5s ease;
}

.btn-close:hover {
  font-size: 14pt;
}
.shake-r {
  animation: shake-r 0.6s ease;
}

@keyframes shake-r {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(10px);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
.btn-dangers {
  height: 40px;
  padding: 0 15px;
  border-radius: 3px;
  background: #e74c3c;
  background: -webkit-linear-gradient(bottom, #e74c3c, #db240f);
  background: linear-gradient(to bottom, #e74c3c, #db240f);
  border: none;
  cursor: pointer;
  color: #fff;
}

.btn-dangers:hover {
  background: #941304;
}

.btn-theme {
  height: 40px;
  padding: 0 15px;
  border-radius: 3px;
  background: #b22a2e;
  background: -webkit-linear-gradient(bottom, #106d42, #198754);
  background: linear-gradient(to bottom, #106d42, #198754);
  border: none;
  cursor: pointer;
  color: #fff;
}

.btn-theme:hover {
  background: #0f633c;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000008e;
}
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-dialog {
  position: relative;
  width: 90%;
  max-width: 500px;
  height: 85%;
  background: #fff;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.alert-title {
  position: relative;
  top: 15px;
  left: 20px;
  font-size: 13pt;
  font-family: "Montserrat", sans-serif;
  color: #313131;
}

.alert-button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;
}
</style>
