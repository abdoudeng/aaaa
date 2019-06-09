import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import car from   './components/routerview/car.vue'
import driver from   './components/routerview/driver.vue'
import record from   './components/routerview/record.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$axios = axios
var routes = [
      {
        path:'/car',
        component: car
    },
    {
        path:'/driver',
        component: driver
    },
    {
        path: '/record',
        component: record
    }
]
var router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
