<template lang="">
   <div
    tabindex="0"
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
    @keydown.stop.prevent="handleKeyDown($event)"
  >
    <div class="inline">
      <span class="text-2xl font-bold ">{{content}}</span>
      <refresh-ccw-icon size="15" class="inline ml-2 bg-gray-200" v-if="refresh"></refresh-ccw-icon>
      <delete-icon size="15" class="inline ml-2 bg-gray-200" v-if="deletes"></delete-icon>
      <corner-down-left-icon size="15" class="inline ml-2 bg-gray-200" v-if="freetext"></corner-down-left-icon>
      <edit-icon size="15" class="inline ml-2 bg-gray-200" v-if="edit"></edit-icon>
    </div>
    <slot></slot>
    </div>
</template>
<script>
import { RefreshCcwIcon,DeleteIcon,CornerDownLeftIcon,EditIcon  } from 'vue-feather-icons'
import posthog from 'posthog-js'
export default {
   inject: [
    'editor',
  ],
  data(){
    return{
        active:false,
    }
  },
  components:{
    RefreshCcwIcon,
    DeleteIcon,
    CornerDownLeftIcon,
    EditIcon
  },
  props: {
    content: String,
    edit:Boolean,
    refresh:Boolean,
    deletes:Boolean,
    freetext:Boolean
  },
  computed: {
    selectedNode() {
      return this.editor.selectedNode;
    }
  },
  methods: {
    handleKeyDown(e){
      if(e.key == "Backspace" || e.key == "Delete"){
        this.removeElement()
      }
    },
    removeElement() {
      return this.editor.removeNode(this.selectedNode);
    },

  }
}
</script>
<style lang="">
    
</style>

  