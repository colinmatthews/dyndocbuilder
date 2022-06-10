<template>
  <main class="flex-1 overflow-y-scroll">
    <div class="relative mx-4 md:px-8 xl:px-0">
      <div class="pt-10 pb-16">
        <div class="px-4 sm:px-6 md:px-0">
          <h1 class="text-2xl leading-6 font-medium text-gray-900">Support</h1>
        </div>
       
       <form class="space-y-8 divide-y divide-gray-200" netlify name="support"  data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 px-10">Issue </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea id="about" name="issue" :v-bind="input"  rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md" />
                    <p class="mt-2 text-sm text-gray-500">Write a few sentences about the issue you experienced..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>
          </div>
       </form>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      form: {
        input: ""
      }
    }
  },
  methods:{
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "support",
          ...this.form
        }),
        axiosConfig
      );
    }
  }
 
 }

</script>

<style>

</style>