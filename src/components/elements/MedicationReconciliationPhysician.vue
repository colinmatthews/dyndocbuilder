<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u>New Prescription</u></p>
      <p>esomeprazole (nexium 20 mg oral delayed release capsule) 1 Capsules zOral route every day. Test CD. Refills: 0.</p>
      <p><u>Changed</u></p>
      <p>acetaminophen (Tylenol 500 mg oral tablet) 1 Tabs Oral every 4 hours as needed for fever for 14 days.</p>
      <p><u>Unchanged</u></p>
      <p>calcium carbonate (Tums 500)</p>
      <p>Trolamine salicylate topical (Aspercreme Nighttime)</p>
      <p><u>Discontinued</u></p>
      <p>enoxaparin (enoxaparin 40 mg/0.4 ml subcutaneous solution) 0.4 milliliter Subcutaneous every 12 hours for 7 days.</p>

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
      content: 'Medication Reconciliation',
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