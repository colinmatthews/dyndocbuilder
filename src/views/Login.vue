<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex w-full bg-white" tabindex="0" @keydown="handleKeyDown($event)">
    <div class="flex-1 flex flex-col justify-center mx-48 py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-12 w-auto" src="../../public/logo.png" alt="Workflow" />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <div class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                <div class="mt-1">
                  <input id="email" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                <div class="mt-1">
                  <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-sm">
                  <router-link href="#" class="font-medium text-indigo-600 hover:text-indigo-500" to="/reset"> Forgot your password? </router-link>
                  <br class="pt-2">
                  <router-link href="#" class="font-medium text-indigo-600 hover:text-indigo-500" to="/signup"> Create an account </router-link>
                </div>
              </div>

              <div>
                <button @click="login()" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    login: async function(){
      try{
        const email = this.email
        const password = this.password
        const auth = getAuth();

        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        if(userCredentials.user){
          this.$router.push("/")
        }
        else{
          this.$toast.warning("Login failed - please try again.",{timeout:5000});
        }
      }
      catch{
        this.$toast.warning("Login failed - please try again.",{timeout:5000});
        console.log("error logging in")
       
      }
    },
    handleKeyDown(e){
      if(e.key == "Enter" || e.key == "Return"){
          this.login()
      }
    }
  }
  
}
</script>
<style>
</style>