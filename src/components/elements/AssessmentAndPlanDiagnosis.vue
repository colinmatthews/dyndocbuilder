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
    <ol>
        <li>1. Chest pain</li>
        <p class="bg-gray-100 h-4"></p>
        <li>2. Fever</li>
        <p class="bg-gray-100 h-4"></p>
    </ol>
    <p style="padding-top:5px">Orders (Last 24 hours):</p>
    <div style="padding-left:10px;">
        <p>amLODIPine, 1 tabs, Oral, Daily, tab(s)</p>
        <p>XR Chest 1 view </p>
    </div>
    </div>
</template>
<script>
import { RefreshCcwIcon,DeleteIcon,CornerDownLeftIcon,EditIcon  } from 'vue-feather-icons'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
    data(){
    return{
        active:false
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
  craft: {
    defaultProps: {
      content: 'Assessment and Plan',
      edit:true,
      refresh:true,
      deletes:true,
      freetext:true
    },
    settings: {
      HeaderSetting,
    },
  },
}
</script>
<style lang="">
    
</style>

<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
    <ol>
        <li>1. Chest pain</li>
        <p class="bg-gray-100 h-4"></p>
        <li>2. Fever</li>
        <p class="bg-gray-100 h-4"></p>
    </ol>
  </GenericComponent>
</template>
<script>
import GenericComponent from '../settings/GenericPhysicianComponent.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
  },
  craft: {
    defaultProps: {
      content: 'Assessment and Plan',
      edit:true,
      refresh:true,
      deletes:true,
      freetext:true
    },
    settings: {
      HeaderSetting,
    },
  },
}
</script>

<style>

</style>