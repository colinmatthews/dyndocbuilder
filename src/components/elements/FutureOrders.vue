<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>CT Head or Brain w/ + w/o Contrast, 03/18/16, Routine, Reason: Altered level of Consciousness, No, Transport Mode: Wheelchair</p>
      <p>CT Spine Cervical w/ + w/o Contrast, 03/18/16. Routine, Reason: Pain, neck, No</p>
      <p>MRI Brain w/ + w/o Contrast, 03/18/16, Routine, Reason: Headache, No, No</p>
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
      content: 'Discharge Orders/Instructions',
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