import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../pages/HelloWorld.vue'
import Coffees from '../pages/Coffees.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: HelloWorld
  },
  {
    path: "/coffees", component: Coffees
  }
]

export const router = new VueRouter({
  routes
})