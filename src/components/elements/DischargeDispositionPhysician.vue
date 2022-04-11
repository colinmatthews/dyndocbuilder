<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u>Home Caregiver Name/Relationship</u> - Mother</p>
      <p><u>Home Caregiver Phone Number</u> - 956-1212</p>
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
      content: 'Discharge Disposition',
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