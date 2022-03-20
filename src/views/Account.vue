<template>
  <main class="flex-1 overflow-y-scroll">
    <div class="relative mx-4 md:px-8 xl:px-0">
      <div class="pt-10 pb-16">
        <div class="px-4 sm:px-6 md:px-0">
          <h1 class="text-2xl leading-6 font-medium text-gray-900">Account</h1>
        </div>
        <div class="px-4 sm:px-6 md:px-0">
          <div class="py-6">
            <!-- Tabs -->
            <div class="lg:hidden">
              <label for="selected-tab" class="sr-only">Select a tab</label>
              <select id="selected-tab" name="selected-tab" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-md rounded-md">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden lg:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                  <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md']">
                    {{ tab.name }}
                  </a>
                </nav>
              </div>
            </div>

            <!-- Alert for non-verified email -->
            <div class="rounded-md bg-yellow-50 p-4 mt-8 border" v-if="!firebaseUser.emailVerified">
              <div class="flex">
                <div class="flex-shrink-0">
                  <BIconExclamationCircle class="h3 text-yellow-500" />
                </div>
                <div class="ml-3">
                  <h3 class="text-md font-semibold text-yellow-800">Email verification required</h3>
                  <div class="mt-2 text-md text-yellow-700">
                    <p>You have not yet verified your email. Please navigate to your email address to verify.</p>
                  </div>
                    <button type="button" @click="resendVerification()" class="inline-flex items-center px-4 py-2 mt-4 border border-transparent bg-yellow-400 text-gray-700 font-semibold text-base font-medium rounded-md shadow-md">{{alertText}}</button>
                </div>
              </div>
            </div>


            <!-- Description list with inline editing -->
            <div class="mt-10 divide-y divide-gray-200 mx-8 ">
              <div class="mt-6">
                <dl class="divide-y divide-gray-200">
                  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-md font-lg text-gray-700">Display Name</dt>
                    <dd class="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2" v-if="!showDisplayNameFields">
                      <!-- Read display name -->
                        <span class="flex-grow">{{user.displayName}}</span>
                        <span class="ml-4 flex-shrink-0">
                          <button type="button" @click="showDisplayNameFields = true" class=" rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Update</button>
                        </span>
                      </dd>
                      <!-- Change display name -->
                      <dd class="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2" v-if="showDisplayNameFields">
                        <input type="email" name="email" id="email" v-model="newDisplayName" style="width:50%" class=" shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block py-2 px-2  border-gray-300 rounded-md" :placeholder="user.displayName" />
                        <span class="flex-grow"></span>
                        <span class="ml-4 flex-shrink-0">
                          <button type="button" class=" rounded-md font-medium py-2" @click="handleUpdateUserDisplayName()">Save</button>
                        </span>
                    </dd>
                  </div>
                  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-md font-lg text-gray-700">Email</dt>
                    <dd class="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2" v-if="!showEmailFields">
                      <!-- Read email -->
                        <span class="flex-grow">{{firebaseUser.email}}</span>
                        <span class="ml-4 flex-shrink-0">
                          <button type="button" @click="handleShowEmailFields()" class=" rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Update</button>
                        </span>
                      </dd>
                      <!-- Change email -->
                      <dd class="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2" v-if="showEmailFields">
                        <input type="email" name="email" id="email" v-model="newEmail" style="width:50%" class=" shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block py-2 px-2  border-gray-300 rounded-md" :placeholder="user.email" />
                        <p class="mt-2 text-sm text-red-600 pl-2" id="email-error" v-if="newEmailError">Failed to save email!</p>
                        <span class="flex-grow"></span>
                        <span class="ml-4 flex-shrink-0">
                          <button type="button" class=" rounded-md font-medium py-2" @click="setNewEmail()">Save</button>
                        </span>
                    </dd>
                  </div>
                  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-md font-lg text-gray-700">Password</dt>
                    <dd class="mt-1 flex text-md text-gray-900 sm:mt-0 sm:col-span-2">
                      <span class="flex-grow"></span>
                      <span class="ml-4 flex-shrink-0">
                      <router-link to="/reset" class="text-purple-600 hover:text-purple-500" >Reset</router-link>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getAuth, sendEmailVerification, updateEmail  } from "firebase/auth";
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return{
      tabs: [
        { name: 'General', href: '#', current: true }, 
      ],
      alertText:"Resend verification",
      showEmailFields:false,
      showDisplayNameFields:false,
      newEmail:"",
      newEmailError:"",
      newDisplayName:"",
    }
  },
 computed:{
   firebaseUser:function(){
      const auth = getAuth();
      const user = auth.currentUser;
      return user
   },
   ...mapState([
     'user',
     'reauthRequired'
   ])
 },
 methods:{
   ...mapActions([
     'updateUserDisplayName'
   ]),
   resendVerification:async function(){
     try{
      const auth = getAuth();
      await sendEmailVerification(auth.currentUser)
      this.alertText = "Email sent"
     }
     catch(err){
       console.log(err)
       this.alertText = "Email failed to send"
     }
   },
   setNewEmail:async function(){
    try{
      const auth = getAuth();
      await updateEmail(auth.currentUser,this.newEmail)
      this.showEmailFields = false
      this.newEmailError = false

     }
     catch(err){
       console.log(err)
       this.newEmailError = err
     }
   },
   handleUpdateUserDisplayName:function(){
     this.updateUserDisplayName(this.newDisplayName)
     this.showDisplayNameFields = false
   },
   handleShowEmailFields:function(){
     if(this.reauthRequired){
        this.$store.commit('setReauthRequired',false)
        this.$toast.info("Sorry, you need to reauthenticate before performing that action",{timeout:3000})
        this.$router.push("/login") 
        return
     }
     this.showEmailFields = true
   }
 }

}
</script>

<style>

</style>