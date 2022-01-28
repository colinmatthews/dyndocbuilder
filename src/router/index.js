import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/editor-single',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorSingleColumn.vue')
  },
  {
    path: '/editor-columns',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorTwoColumn.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
