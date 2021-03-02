import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: HelloWorld
  }
]

export const router = new VueRouter({
  routes
})