import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PasswordReset from '../views/PasswordReset.vue'
import Account from '../views/Account.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/editor-double/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorDouble.vue'),
    meta:{
      authRequired:true
    }
  },
  {
    path: '/editor-single/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorSingle.vue'),
    meta:{
      authRequired:true
    }
  },
  {
    path: '/',
    component: Home,
    name:"Home",
    meta:{
      authRequired:true
    }
   
  },
  {
    path: '/login',
    component: Login,
    name:"Login"
  },
  {
    path: '/reset',
    component: PasswordReset
  },
  {
    path: '/account',
    component: Account,
    name:"Account",
    meta:{
      authRequired:true
    },
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
      // get firebase current user
      const firebaseCurrentUser = user

       if (
           to.path === "/login" ||
           to.path === "/error-404" ||
           to.path === "/error-500" ||
      //     to.path === "/callback" ||
      //     to.path === "/pages/comingsoon" ||
           (firebaseCurrentUser)
       ) {
           return next();
       }

      // If auth required, check login. If login fails redirect to login page
      if(to.meta.authRequired) {
        if (!(firebaseCurrentUser)) {
          router.push({ path: '/login', query: { to: to.path } })
        }
      }

      return next()
      // Specify the current path as the customState parameter, meaning it
      // will be returned to the application after auth
      // auth.login({ target: to.path });

  });

});

export default router
