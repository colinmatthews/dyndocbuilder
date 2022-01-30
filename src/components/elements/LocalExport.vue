
<template>
  <div style="float:right;">
    <button type="button" 
    @click="doExport()"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Internal Data
  </button>
  <template as="template" v-if="open" class="overflow-y-hidden">
    <div as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <template as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </template>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <template as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div class="text-center">
                <h3 as="h3" class="text-lg leading-6 font-medium text-gray-900">
                 Internal State
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    You can copy this and import the same document later!
                  </p>
                  <div>
                  <div class="mt-5">
                    <textarea v-model="plainData" rows="4" name="comment" id="comment" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md " style="height:200px;" />
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button 
              @click="open = false"
              type="button" 
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
               Back to editor
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  inject: [
    'editor',
  ],
  data() {
    return {
      plainData: '',
      open:false,
    };
  },
  computed:{
    ...mapState([
      'blocks'
    ])
  },
  methods: {
    doExport() {
      this.open = true
      this.plainData = this.editor.export();
    },
    doImport() {
      this.editor.import(this.plainData);
    },
    
  },
};
</script>