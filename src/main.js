import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
//import evn from './env.js'

const mock = false
if (mock) {
  require('./mock/api')
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

//axios.defaults.baseURL = evn.baseURL

axios.interceptors.response.use(function(response) {
  let returnData = response.data
  if (returnData.status == 0) {
    return returnData.data
  } else if (returnData.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(returnData.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
