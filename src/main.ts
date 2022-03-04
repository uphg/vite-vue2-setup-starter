import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import router from '~src/router'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
