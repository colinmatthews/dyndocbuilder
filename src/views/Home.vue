<template>
<div class="overflow-y-scroll w-full overflow-x-hidden">

   <div class="mt-8 px-4">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        New Document
      </h3>
    </div>

  <div class="flex justify-left gap-8 pt-8 px-4 ">
   <div class="bg-white shadow sm:rounded-lg" style="width:25%;">
    <div class="px-4 py-5 sm:p-6">
     
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Single Column
      </h3>
      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
        <div class="max-w-xl text-sm text-gray-500">
          <p>
           Best used for short notes with little data
          </p>
        </div>
        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button 
          @click="$router.push('/editor-single/0')"
          type="button" 
          class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow sm:rounded-lg " style="width:25%;">
    <div class="px-4 py-5 sm:p-6"  >
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Two Column
      </h3>
      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
        <div class="max-w-xl text-sm text-gray-500">
          <p>
            Standard format with left column for narriative and right for data
          </p>
        </div>
        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button type="button" 
          @click="$router.push('editor-double/0')"
          class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>


  
  <!-- This example requires Tailwind CSS v2.0+ -->
 
    <div class="pb-3 mt-12 px-4">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        Recently Viewed
      </h3>
    </div>

    <div class="flex flex-col px-4  ">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow-sm overflow-hidden border-b border-gray-100 sm:rounded-lg border">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="document in documents" :key="document.title">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ document.title }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ document.authorDisplayName }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ new Date(document.updated).toLocaleDateString() }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <router-link :to="'/editor-single/' + document.id" class="text-indigo-600 hover:text-indigo-900">Edit</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  

</div>
</template>

<script>
import {mapState} from 'vuex'
import {BIconLayoutSidebarInsetReverse,BIconFile} from 'bootstrap-vue'

export default {
  data(){
    return{
    }
  },
  computed:{
    ...mapState(['documents'])
  }

}
</script>

<style>

</style>