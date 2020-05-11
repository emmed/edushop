// routes.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from './components/Homepage.vue';
import List from './components/List.vue';
import Post_an_ad from './components/Post_an_ad.vue';
import Update from './components/Update.vue';
import Login from './components/Login.vue';
import Bookpackage from './components/Bookpackage.vue';
import UserAdmin from './components/UserAdmin.vue';
import UserAdminPlacedAds from './components/UserAdminPlacedAds.vue';
import Details from './components/Details.vue';
import ContactSeller from './components/ContactSeller.vue';
import Payment from './components/Payment.vue';
import Faq from './components/Faq.vue';
import ShoppingCart from './components/ShoppingCart.vue';

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/details/:details_id/:category_id',
      name: 'details',
      component: Details
    },
    {
      path: '/update/:index/:product_id',
      name: 'update',
      component: Update
    },
    {
      path: '/list/',
      name: 'list',
      component: List,
    },
    {
      path: '/post_an_ad',
      name: 'post_an_ad',
      component: Post_an_ad,
    },
  
    {
      path: '/login',
      name: 'login',
      component:Login,
    },
    {
      path: '/bookpackage',
      name: 'bookpackage',
      component: Bookpackage,
    },
    {
      path: '/useradmin',
      name: 'useradmin',
      component: UserAdmin,
    },
    {
      path: '/useradmin_placed_ads',
      name: 'useradmin_placed_ads',
      component: UserAdminPlacedAds,
    },
    {
      path: '/contactseller',
      name: 'contactseller',
      component: ContactSeller,
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart,
    }


  ]

});