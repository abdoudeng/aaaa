var VueRouter = require('vue-router')
import Vue from 'vue'
import car from   './components/routerview/car.vue'
import driver from   './components/routerview/driver.vue'
import record from   './components/routerview/record.vue'
Vue.use(VueRouter)
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
    routes
})
export default router