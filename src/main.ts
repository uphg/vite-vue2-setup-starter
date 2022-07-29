import './style.css'
import App from './App.vue'
import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from 'src/router'

Vue.use(PiniaVuePlugin)

new Vue({
  pinia: createPinia(),
  render: h => h(App),
  router,
}).$mount('#app')

