<template>
   <div class="bg-white shadow overflow-hidden sm:rounded-md grid-list">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="block in filteredBlocks" :key="block.index">
        <Blueprint component="card" @drag="trackClick()">
        <div class="block hover:bg-gray-50" draggable="true">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ block.title }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                </p>
                
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                
              </div>
            </div>
          </div>
        </div>
        <template v-slot:blueprint>
         <component :is="block.component" />
        </template>
        </Blueprint>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {Blueprint, Canvas} from '@v-craft/core'
import fuzzysort from 'fuzzysort'
import posthog from 'posthog-js'

export default {
  components:{
    Blueprint,Canvas,
  },
  computed:{
    ...mapState(['blocks','blockSearch']),
    filteredBlocks(){
      const filtered = this.blocks.filter(el => el.id!== 4 && el.id !== 5 && el.id !== 0)
      if(this.blockSearch == null || this.blockSearch == ""){
         return filtered
      }
      const results = fuzzysort.go(this.blockSearch,filtered,{key:'title'})
      const output = results.map( x => x.obj)
      return output
    }
  },
  method:{
    isSelected(blockId){
      return blockId == this.selected
    },
    trackClick(){
      posthog.capture('Drag Block', { type:this.content })
    }
  },
  data(){
    return{
      selected:null
    }
  }

}
</script>

<style>

.grid-list{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>