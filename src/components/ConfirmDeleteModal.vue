<template>
  <div>
    <div as="div" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <template as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </template>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <template as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="open = false">
                <span class="sr-only">Close</span>
               
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 as="h3" class="text-lg leading-6 font-medium text-gray-900 pb-2"> Delete Document </h3>
                <div class="mt-2 mb-2">
                  <p class="text-md text-gray-500">Are you sure you want to delete <b>{{title}}</b>? This action cannot be undone.</p>
                </div>
              </div>
            </div>
            <div class="mt-5 my-auto ">
              <button type="button" class="mt-3 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:text-gray-500" @click="handleDeleteDocument()">Delete</button>
              <button type="button" class="mt-3 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 " @click="$emit('close')">Cancel</button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"


export default {
  props:{
      title:String,
      documentID:String
  },
  methods:{
      ...mapActions([
          'deleteDocument'
      ]),
      handleDeleteDocument(){
          this.deleteDocument(this.documentID)
          this.$emit('close')
      }
  }

}
</script>