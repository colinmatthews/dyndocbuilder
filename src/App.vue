<template>
 <div class="h-screen flex h-full bg-gray-50 overflow-y-hidden " >
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block" v-if="authenticated">
      <div class="w-full py-6 flex flex-col items-center">
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
        </div>
        <div class="flex-1 mt-6 w-full px-2 space-y-1">
          <router-link v-for="item in sidebarNavigation" :key="item.name" :to="item.path" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white', 'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium']" :aria-current="item.current ? 'page' : undefined">
            <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white', 'h-6 w-6']" aria-hidden="true" />
            <span class="mt-2">{{ item.name }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <template as="template" :show="mobileMenuOpen" v-if="authenticated">
      <div as="div" class="md:hidden" @close="mobileMenuOpen = false">
        <div class="fixed inset-0 z-40 flex">
          <template as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </template>
          <template as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
              <template as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-1 right-0 -mr-14 p-1">
                  <button type="button" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white" @click="mobileMenuOpen = false">
                    <!-- icon -->
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </template>
              <div class="flex-shrink-0 px-4 flex items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
              </div>
              <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav class="h-full flex flex-col">
                  <div class="space-y-1">
                    <a v-for="item in sidebarNavigation" :key="item.name"  :class="[item.name == $route.name ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white', 'group py-2 px-3 rounded-md flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                    <component :is="item.icon" :class="[item.name == $route.name ? 'text-white' : 'text-indigo-300 group-hover:text-white', 'mr-3 h-6 w-6']" aria-hidden="true" />
                      <span>{{ item.name }}</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </template>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
    </template>

    <!-- Content area -->
    
      <!-- Main content -->
      
      <router-view></router-view>
      
    
  </div>
 
</template>

<script>
import {mapState, mapMutations,mapActions} from 'vuex'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  name: 'App',
  data() {
    return {
      sidebarNavigation:[
        {
          name:"Home",
          path:"/",
          icon:"BIconHouseFill",
          active:false
        },
        {
          name:"Account",
          path:"/account",
          icon:"BIconPersonCircle",
          active:false
        }
      ]
    };
  },
 computed:{
    ...mapState([
      'authenticated'
    ]),
    
 },
 methods:{
  ...mapMutations([
    'setUser',
    'setAuthenticated',
    'setToken'
  ]),
  ...mapActions([
    'getDocuments'
  ])
 },
  mounted(){
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken(true)
        this.setToken(token)
        this.setUser(user)
        this.setAuthenticated(true)
        this.getDocuments()
      }
    })
  }  
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body{
  font-family: 'Inter', sans-serif;
}
.main-window{
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}
.scrollable {
  overflow-y: scroll;
}
</style>