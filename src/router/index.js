import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import * as guards from './guards'

Vue.use(Router)

const router = new Router({ routes })

guards.register(router)

export default router
