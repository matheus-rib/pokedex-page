import Vue from 'vue'
import router from '../router'
import store from '../store'

import filters from './filters'
Vue.use(filters)

import Toaster from 'v-toaster'
Vue.use(Toaster, { timeout: 5000 })

export default { router, store }