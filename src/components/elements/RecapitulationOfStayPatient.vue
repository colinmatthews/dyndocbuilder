<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u>Recap of Activities Provided</u> - Leisure activity evaluation</p>
      <p><u>Recap of Medical Consults</u> - Dental services, Psychiatric services</p>
      <p><u>Recap of Therapy Services</u> - Physical therapy device draining, physical therapy progressive mobility program</p>
      <p><u>Recap of the Stay Comments</u> - Free text recap of stay</p>

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
      content: 'Recapitulation of Resident Stay',
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