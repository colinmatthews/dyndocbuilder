<template lang="">
   <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
    <div class="inline">
      <span><u><b>{{content}}</b></u></span>
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
export default {
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
}
</script>
<style lang="">
    
</style>