<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
     <p class="text-lg">01/21/2023 10:23 AM EST</p>
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
      content: 'Discharge Date',
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