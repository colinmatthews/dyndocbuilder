<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>Notice: This patient has devices implanted this visit that are not MRI compatible.</p>
      <p><u>Implanted This Visit</u></p>
      <p><b>invasive surgery</b></p>
      <p>Breast</p>
      <p>2015-09-30T19:00:00.000-05:00</p>
      <p>1501.ITEM&2 (25). 10/01/2015. MR Unsafe</p>
      <p><b>Undefined Procedure</b></p>
      <p>Arm</p>
      <p>2016-05-31T19:00:00.000-05:00</p>
      <p>abc 06/01/2016. MR Safe</p>
      <p><u>Removed This Visit</u></p>
      <p>Ankle R</p>
      <p>2016-06-15T19:00:00.000-05:00</p>
      <p>Hello World 06/16/2016, Patient Request</p>
      <p>Body Site Undefined</p>
      <p>2016-10-03T19:00:00.000-05:00</p>
      <p>new arm 10/04/2016, Planned Explant</p>
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
      content: 'Implanted / Explanted Devices',
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