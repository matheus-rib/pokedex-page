import Vue from 'vue'
import App from './App.vue'
import config from './config'

import './styles'

Vue.config.productionTip = false

new Vue({
  ...config,
  render: h => h(App),
}).$mount('#app')
