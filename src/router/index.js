import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/editor-double/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorDouble.vue')
  },
  {
    path: '/editor-single/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorSingle.vue')
  },
  {
    path: '/',
    component: Home
  }

]

const router = new VueRouter({
  routes
})

export default router
