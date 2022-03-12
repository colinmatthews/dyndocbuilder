import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './helpers/global-components'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import './assets/tailwind.css'
import firebaseConfig from "./helpers/firebase"
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


let HTTPClient = axios.create({ baseURL: 'http://localhost:8081/'});
Vue.prototype.$http = HTTPClient;
store.$http = HTTPClient

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
