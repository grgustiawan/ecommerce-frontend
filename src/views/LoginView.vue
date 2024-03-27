<template>
  <main class="main pages">
    <div class="page-header breadcrumb-wrap">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html" rel="nofollow"
            ><i class="fi-rs-home mr-5"></i>Home</a
          >
          <span></span> Pages <span></span> Login
        </div>
      </div>
    </div>
    <div class="page-content pt-150 pb-150">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-10 col-md-12 m-auto">
            <div class="row">
              <div class="col-lg-6 pr-30 d-none d-lg-block">
                <img
                  class="border-radius-15"
                  src="assets/images/page/login-1.png"
                  alt="" />
              </div>
              <div class="col-lg-6 col-md-8">
                <div class="login_wrap widget-taber-content background-white">
                  <div class="padding_eight_all bg-white">
                    <div class="heading_s1">
                      <h1 class="mb-5">Login</h1>
                      <p class="mb-30">
                        Don't have an account?
                        <router-link :to="{ name: 'Register' }"
                          >Create here</router-link
                        >
                      </p>
                    </div>
                    <vs-alert
                      v-if="success"
                      class="mb-3"
                      variant="success"
                      show-close
                      @close="alertClose()">
                      Login Successfully!
                    </vs-alert>
                    <vs-alert
                      v-if="iserror"
                      class="mb-3"
                      variant="error"
                      show-close
                      @close="alertClose()">
                      {{ message }}
                    </vs-alert>
                    <div>
                      <div class="form-group">
                        <input
                          type="email"
                          required=""
                          name="email"
                          v-model="emailLogin"
                          @keyup.enter="login"
                          placeholder="Email *" />
                      </div>
                      <div class="form-group">
                        <input
                          required=""
                          type="password"
                          name="password"
                          @keyup.enter="login"
                          v-model="password"
                          placeholder="Your password *" />
                      </div>
                      <div class="login_footer form-group mb-50">
                        <div class="chek-form">
                          <div class="custome-checkbox">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox1"
                              value="" />
                            <label
                              class="form-check-label"
                              for="exampleCheckbox1"
                              ><span>Remember me</span></label
                            >
                          </div>
                        </div>
                        <router-link class="text-muted" :to="{ name: 'Forgot' }"
                          >Forgot password?</router-link
                        >
                      </div>
                      <a
                        class="btn btn-block hover-up"
                        name="login"
                        @click="login">
                        <span
                          v-if="is_proccess"
                          class="spinner-border"
                          role="status"></span>
                        <span v-if="!is_proccess">Log in</span>
                      </a>
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
import VsAlert from "@vuesimple/vs-alert";
export default {
  name: "LoginView",
  components: {
    VsAlert,
  },
  data() {
    return {
      emailLogin: "",
      password: "",
      success: false,
      iserror: false,
      successPw: false,
      iserrorPw: false,
      message: "",
      is_proccess: false,
    };
  },
  methods: {
    login() {
      if (this.is_proccess) return;
      this.is_proccess = true;
      this.iserror = false;

      if (!this.emailLogin) {
        this.message = "Email or Password is invalid";
        setTimeout(() => {
          this.is_proccess = false;
          this.iserror = true;
        }, 2000);
        return;
      }

      if (!this.password) {
        this.message = "Email or Password is invalid";
        setTimeout(() => {
          this.is_proccess = false;
          this.iserror = true;
        }, 2000);
        return;
      }

      const data = {
        email: this.emailLogin,
        password: this.password,
      };

      if (this.emailLogin && this.password) {
        this.$store
          .dispatch("LOGIN", data)
          .then(() => {
            this.success = true;
            setTimeout(() => {
              this.success = false;
              this.$router.push({ name: "Store" });
            }, 1000);
            this.is_proccess = false;
          })
          .catch((error) => {
            console.log(error);
            this.message = "Email or Password is invalid";
            setTimeout(() => {
              this.is_proccess = false;
              this.iserror = true;
            }, 2000);
          });
      }
    },
    alertClose() {
      this.success = false;
      this.iserror = false;
      this.successPw = false;
      this.iserrorPw = false;
    },
  },
};
</script>

<style></style>
