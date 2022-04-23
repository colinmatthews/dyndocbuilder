<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>MRI Abdomen w/ + w/o Contrast - 12/13/2015 19:58 CST, MRI Abdomen w/ Contrast - 12/13/2015 19:58 CST</p>
      <p>_JH Interp</p>
      <p>MRI Ankle w/ Contrast Left - 12/13/2015 19:50 CST, MRI Ankle w/ Contrast Right - 12/13/2015 19:57 CST</p>
      <p>_O5 and O6</p>
      <p>MRI Brain w/o Contrast -  12/13/2015 17:44 CST</p>
      


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
      content: 'Radiology Results',
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