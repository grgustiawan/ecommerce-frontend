import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ForgotPassword from '@/views/ForgotPasswordView.vue'
import ResetPassword from '@/views/ResetPasswordView.vue'
import ProductView from '@/views/ProductView.vue'
import BrandView from '@/views/BrandView.vue'
import CategoryView from '@/views/CategoryView.vue'
import WishlistView from '@/views/WishlistView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import InvoiceView from '@/views/InvoiceView.vue'
import AccountView from '@/views/AccountView.vue'
import LandingView from '@/views/LandingView.vue'
import StoreLocationView from '@/views/StoreLocationView.vue'
import ContactView from '@/views/ContactView.vue'
import ArticleListView from '@/views/ArticleListView.vue'
import EncyclopediaView from '@/views/EncyclopediaView.vue'
import ArticleDetailsView from '@/views/ArticleDetailsView.vue'
import PurchaseGuideView from '@/views/PurchaseGuideView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView'
import TermsOfServicesView from '@/views/TermsOfServicesView.vue'
import CategoryDetailsView from '@/views/CategoryDetailsView'
import AllProductView from '@/views/AllProductView'
import OnlineConsulView from '@/views/OnlineConsulView.vue'

const routes = [
  {path: '/', name: 'Home', component: LandingView},
  {path: '/store', name: 'Store', component: HomeView, meta: { login: true }},
  {path: '/login', name: 'Login', component: LoginView, meta: { guest: true }},
  {path: '/register', name: 'Register', component: RegisterView},
  {path: '/forgot', name: 'Forgot', component: ForgotPassword},
  {path: '/reset/:token', name: 'Reset', component: ResetPassword},
  {path: '/product/:id', name: 'Product', component: ProductView, meta: {login: true}},
  {path: '/products', name: 'Products', component: AllProductView, meta: {login: true}},
  {path: '/brand', name: 'Brand', component: BrandView, meta: {login: true}},
  {path: '/categories', name: 'Category', component: CategoryView, meta: {login: true}},
  {path: '/wishlist', name: 'Wishlist', component: WishlistView, meta: {login: true}},
  {path: '/cart', name: 'Cart', component: CartView, meta: {login: true}},
  {path: '/checkout', name: 'Checkout', component: CheckoutView, meta: {login: true}},
  {path: '/invoice/:invid/:usrid', name: 'Invoice', component: InvoiceView, meta: {login: true}},
  {path: '/account', name: 'Account', component: AccountView, meta: { login: true}},
  {path: '/location', name: 'Location', component: StoreLocationView},
  {path: '/contact', name: 'Contact', component: ContactView},
  {path: '/articles', name: 'Articles', component: ArticleListView},
  {path: '/encyclopedias', name: 'Encyclopedias', component: EncyclopediaView},
  {path: '/article/:id', name: 'Article', component: ArticleDetailsView},
  {path: '/purchase-guide', name: 'PurchaseGuide', component: PurchaseGuideView},
  {path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicyView},
  {path: '/terms-of-services', name: 'TermsOfServices', component: TermsOfServicesView},
  {path: '/category/:id', name: 'CategoryDetails', component: CategoryDetailsView, meta: {login: true}},
  {path: '/online-consul', name: 'OnlineConsul', component: OnlineConsulView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.matched.some((record) => record.meta.login)) {
    if (!store.getters.GET_AUTH_TOKEN) {
      next({
        name: 'Login',
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.GET_AUTH_TOKEN) {
      next({
        name: 'Store',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
