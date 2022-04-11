<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>actaminophen, 320mg, 10ml, Oral, As Indicated, PRN </p>
      <p>albuterol 5mg/ml (0.5%) inhalation solution, 5 mg, 1 mL, Inhale, q6hr</p>
      <p>Ambien 10mg oral tablet, 5mg, 0.5 tabs, Oral, 2x/Wk, PRN</p>
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
      content: 'Medications',
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