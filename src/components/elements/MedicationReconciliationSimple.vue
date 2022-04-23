<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>DULoxetine (Cymbalta 60 mg oral delayed release capsule)</p>
      <p>atorvastain (atorvastin 10 mg oral tablet)</p>
      <p>levothyroxine (levothyroxine 75 mcg (0.075 mg) oral tablet)</p>
      <p>tamoxifen (tamoxifen 20 mg oral tablet)</p>
      <p><b>Contact prescribing physician if questions or concerns</b></p>
      <p>warfarin (Coumadin 5 mg oral tablet)</p>
      <p><b>Stop taking these medications</b></p>
      <p>simvastatin (simvastatin 20 mg oral tablet)</p>



  </GenericpatientComponent>
</template>
<script>
import GenericPatientComponent from '../settings/GenericPatientComponentSettings.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericPatientComponent
  },
  craft: {
    defaultProps: {
      content: 'This Is Your Medications List',
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