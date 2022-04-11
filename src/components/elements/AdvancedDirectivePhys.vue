<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u>Advance Directive</u> - Yes</p>
      <p style="padding-left:10px">Comments entered by Physician, Demo - This is a comment</p>
      <p><u>Advance Directive Additional Information</u> - No</p>
      <p><u>Advance Directive Date</u> - 04/21/2023</p>
      <p><u>Advance Directive Intent</u> - Not sure</p>
      <p><u>Advance Directive Intent Stated By</u> - Friend</p>
      <p><u>Advance Directive Location</u> - Unable to obtain copy</p>
      <p><u>Advance Directive Type</u> - Living will, medical power of attorney</p>
      <p><u>Advance Directive Directive Not Obtained</u> - Not available</p>
  </GenericComponent>
</template>
<script>
import GenericComponent from '../settings/GenericPhysicianComponentSettings.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
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

<style>

</style>