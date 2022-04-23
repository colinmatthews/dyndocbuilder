<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>Test Name Test Result Date/Time</p>
      <p>Hgb 14.0 g/dL 10/17/2016 13:28 CDT</p>
      <p>Hct 34.0 10/17/2016 13:28 CDT</p>
      <p>Glucose Urine Dipstick Negative 10/17/2016 13:28 CDT</p>
      <p>Protein Urine Dipstick Negative 10/17/2016 13:28 CDT</p>
      <p>U beta hCG QI Positive 10/17/2016 13:28 CDT</p>
    
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
      content: 'Lab Results',
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