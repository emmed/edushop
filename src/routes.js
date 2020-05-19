// routes.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from './components/Homepage.vue';
import List from './components/List.vue';
import Post_an_ad from './components/Post_an_ad.vue';
import Update from './components/Update.vue';
import Login from './components/Login.vue';
import Package from './components/Package.vue';
import UserAdmin from './components/UserAdmin.vue';
import UserAdminPlacedAds from './components/UserAdminPlacedAds.vue';
import Details from './components/Details.vue';
import ContactSeller from './components/ContactSeller.vue';
import Payment from './components/Payment.vue';
import Faq from './components/Faq.vue';
import ShoppingCart from './components/ShoppingCart.vue';

Vue.use(VueRouter);



// function guardMyroute(to, from, next)
// {
//  var isAuthenticated= false;
// //this is just an example. You will have to find a better or 
// // centralised way to handle you localstorage data handling 
// if(localStorage.getItem('token'))
//   isAuthenticated = true;
//  else
//   isAuthenticated= false;
//  if(isAuthenticated) 
//  {
//   next(); // allow to enter route
//  } 
//  else
//  {
//   next('/login'); // go to '/login';
//  }
// }

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
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart,
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

     // beforeEnter : guardMyroute,


      // beforeEnter: (to, from, next) => {
      //   if(window.token == null){
      //     next('/login')
      //   }else {
      //     next()
      //   }
      // }
    },
  
    {
      path: '/login',
      name: 'login',
      component:Login,
      //beforeEnter : guardMyroute,

   
    },
    {
      path: '/package',
      name: 'package',
      component: Package,
    },
    {
      path: '/useradmin',
      name: 'useradmin',
      component: UserAdmin,
    //  beforeEnter : guardMyroute,

      // beforeEnter: (to, from, next) => {
      //   if(window.token == null){
      //     next('/login')
      //   }else {
      //     next('/useradmin')
      //   }
      // }
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


  ]

});