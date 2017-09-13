import Vue from 'vue'
import Router from 'vue-router'
import ServiceRequest from '@/components/Service_Request'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ServiceRequest',
      component: ServiceRequest
    }
  ]
})
