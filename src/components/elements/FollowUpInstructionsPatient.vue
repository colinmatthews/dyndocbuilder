<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
        <p style="padding-top:20px">
          <span><b>Follow up with:</b> Surgeon MD, Demo</span>
          <span style="padding-left:20px"><b>Why: </b>Post op follow up</span>
        </p>
        <p>
          <span><b>When: </b>03/25/2023</span>
          <span style="padding-left:40px"><b>Where: </b>Surgeon MD Clinic</span>
        </p>
        <p style="padding-top:20px">
          <span><b>Follow up with: </b>Family Doctor, Demo</span>
        </p>
        <p>
          <span><b>When: </b>03/28/2023</span>
        </p>
  </GenericComponent>
</template>
<script>
import GenericComponent from '../settings/GenericPatientComponentSettings.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
  },
  craft: {
    defaultProps: {
      content: 'You Need to Schedule the Following Appointments',
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