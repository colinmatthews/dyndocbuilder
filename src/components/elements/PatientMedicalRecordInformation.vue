<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>MRN: 12330802</p>
      <p>FIN: 110219122</p>
      <p>Location: Baseline West Medical Center</p>
      <p>Registration Date and Time: 02/13/2016 07:39 CST</p>
      <p>Primary Care Physician: Adams MD, Andrew</p>

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
      content: '',
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