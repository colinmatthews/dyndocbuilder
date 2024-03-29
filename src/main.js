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
import posthog from 'posthog-js'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Toast);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

posthog.init('phc_Fj3gERQjspPwlu9xiSYo76SFl75TgtRqV6HyVWLDeW2', { api_host: 'https://app.posthog.com' })

let HTTPClient = axios.create({ baseURL: 'http://localhost:8081/'});
Vue.prototype.$http = HTTPClient;
store.$http = HTTPClient

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
