import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { router } from './routes'
 
 
 Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')