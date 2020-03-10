import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMyself from '../views/AboutMyself.vue'
import Hobbies from '../views/MyHobbies.vue'

Vue.use(VueRouter)

const routes = [
   {
    path: '/aboutMyself',
    name: 'AboutMyself',
    component: AboutMyself
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: Hobbies
  }
  ]

const router = new VueRouter({
  routes
})

export default router
