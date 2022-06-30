<template>
<div class="overflow-y-scroll w-full overflow-x-hidden">
  <b-spinner label="Spinning" v-if="!authenticated" class="m-5" ></b-spinner>
  <div class="overflow-y-scroll w-full overflow-x-hidden" v-else>

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
            @click="createDocumentHandler('single')"
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
            @click="createDocumentHandler('double')"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>


    
    <!-- This example requires Tailwind CSS v2.0+ -->
  
      <div class="pb-3 mt-12 px-4 flex">
        <h3 class="text-2xl leading-6 font-medium text-gray-900">
          Recently Viewed
        </h3>
      </div>
      <div class="flex px-4 pb-2">
        <div class="flex">
          <p class="text-sm text-purple-700 cursor-pointer">My Documents</p>
          <p class="text-sm pl-4 cursor-pointer">All Documents</p>
        </div>
        <div class="border-b ml-auto">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <b-icon-search class=""></b-icon-search>
            </div>
            <input v-model="documentSearch" id="search" style="height:50px; min-width:300px" name="search" class="block w-full bg-white rounded shadow-sm py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search" />
          </div>
        </div>
      </div>
      <div class="flex flex-col px-4  ">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow-sm overflow-hidden border-b border-gray-100 sm:rounded-lg border">

              <table class="min-w-full divide-y divide-gray-200"  v-if="lastViewedWithSearch.length > 0">
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
                    <th scope="col" class="relative  py-3">
                      <span class="sr-only">Delete</span>
                    </th>
                  
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="document in lastViewedWithSearch" :key="document.id" >
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" @click="openDocument({type:document.type,id:document.id})">
                      {{ document.title }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500" @click="openDocument({type:document.type,id:document.id})">
                      {{ document.authorDisplayName }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500" @click="openDocument({type:document.type,id:document.id})">
                      {{ new Date(document.updated).toLocaleDateString() }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button class="text-red-500 hover:text-red-900 pr-12 " @click="showConfirmDeleteModal(document)">Delete</button>
                      <router-link :to="'/editor-' + document.type +'/' + document.id" class="text-indigo-600 hover:text-indigo-900">Edit</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div v-else>
                <div class="text-center py-4">
                  <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <h3 class="mt-2 text-sm font-medium text-gray-900">No documents</h3>
                  <p class="mt-1 text-sm text-gray-500">Get started by creating a new document.</p>
                  <div class="mt-6">
                    <button type="button" @click="createDocumentHandler('single')" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <BIconPlusCircle  class="mx-2"/>
                      New document
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmDeleteModal v-if="showModal" v-on:close="showModal = false" :title="propTitle" :documentID="propDocumentID"/>
  </div>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {BIconLayoutSidebarInsetReverse,BIconPlusCircle} from 'bootstrap-vue'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal.vue'
import fuzzysort from 'fuzzysort'

export default {
  data(){
    return{
      showModal:false,
      propTitle:"",
      propDocumentID:"",
      documentSearch:""
    }
  },
  components:{
    ConfirmDeleteModal,
    BIconPlusCircle
  },
  computed:{
    ...mapState([
      'documents',
      'user',
      'newDocumentID',
      'authenticated'
    ]),
    documentsByLastViewed:function(){
      if(this.user.viewed){
        const viewed = this.user.viewed
        let tempDocument
        let documentsOrdered = []
        for( let id of viewed){
          tempDocument = this.documents.find(doc => doc.id == id)
          console.log(tempDocument)
          documentsOrdered.push(tempDocument)
        }
        return documentsOrdered
      }
    },
    lastViewedWithSearch:function(){
      const filtered = this.documentsByLastViewed
      if(this.documentSearch == null || this.documentSearch == ""){
         return filtered
      }
      const results = fuzzysort.go(this.documentSearch,filtered,{key:'title'})
      const output = results.map( x => x.obj)
      return output
    }
  },
  methods:{
    ...mapActions([
      'createDocument'
    ]),
    createDocumentHandler:async function(type){
      await this.createDocument(type)
    },
    showConfirmDeleteModal(document){
      this.propTitle = document.title
      this.propDocumentID = document.id
      this.showModal = true
    },
    openDocument(documentData){
      const {type,id} = documentData
      this.$router.push('/editor-' + type +'/' + id)
    }
  }
}
</script>

<style>

</style>