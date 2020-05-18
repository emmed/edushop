import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { router } from './routes'
import i18n from './i18n'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false

Vue.component('multiselect', Multiselect)

new Vue({
  router: router,
  i18n,
  Multiselect,
  render: h => h(App)
}).$mount('#app')