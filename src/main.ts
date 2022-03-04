import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI, { createApp } from '@vue/composition-api'
import router from '~src/router'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

createApp({
  pinia: createPinia(),
  render: h => h(App),
  router,
}).mount('#app')
