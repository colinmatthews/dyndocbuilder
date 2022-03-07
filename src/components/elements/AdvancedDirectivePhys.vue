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
    <p><u>Advance Directive</u> - Yes</p>
    <p style="padding-left:10px">Comments entered by Physician,Demo - This is a comment</p>
    <p><u>Advance Directive Additional Information</u> - No</p>
    <p><u>Advance Directive Date</u> - 04/21/2023</p>
    <p><u>Advance Directive Intent</u> - Not sure</p>
    <p><u>Advance Directive Intent Stated By</u> - Friend</p>
    <p><u>Advance Directive Location</u> - Unable to obtain copy</p>
    <p><u>Advance Directive Type</u> - Living will, medical power of attorney</p>
    <p><u>Advance Directive Directive Not Obtained</u> - Not available</p>
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
      content: 'Advanced Directive',
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