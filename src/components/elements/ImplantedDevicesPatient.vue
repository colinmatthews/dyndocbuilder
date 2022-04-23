<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>Implanted</p>
      <p>Undefined Procedure</p>
      <p>Arm</p>
      <p>abc 06/01/2016, MR Safe</p>
      <p>Removed</p>
      <p>Ankle R</p>
      <p>Hello World 06/16/2016, Patient Request - UDI: 1234</p>
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
      content: 'Devices Implanted/Removed This Visit',
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