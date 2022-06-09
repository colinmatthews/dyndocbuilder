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
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Reset your password</h2>
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


              <div class="flex items-center justify-between" v-if="!user">
                <div class="text-sm">
                  <router-link href="#" class="font-medium text-indigo-600 hover:text-indigo-500" to="/login">Sign In</router-link>
                </div>
              </div>

              <div>
                <button @click="resetPassword()" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset Password</button>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-md bg-blue-50 p-4 mt-4" v-if="showAlert">
        <div class="flex" >
            <div class="flex-shrink-0">
                <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div class="ml-3 flex-1 md:flex md:justify-between">
                <p class="text-md text-blue-700">Your submission has been received. <br></br> If we have an account matching your email address, you will receive an email with a link to reset your password.</p>
                <p class="mt-3 text-sm md:mt-0 md:ml-6">
                </p>
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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  data(){
    return{
      email:"",
      showAlert:false
    }
  },
  methods:{
    resetPassword: async function(){
        const email = this.email
        const auth = getAuth();
        this.showAlert = true
        await sendPasswordResetEmail(auth, email)
        
    },
    handleKeyDown(e){
      if(e.key == "Enter" || e.key == "Return"){
          this.resetPassword()
      }
    }
  },
  computed:{
    user:function(){
      const auth = getAuth();
      const user = auth.currentUser;
      return user
   }
  }
}
</script>
<style>
</style>