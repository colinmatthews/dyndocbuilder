<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u>Inpatient</u></p>
      <p>Autobsc_Methyl, 100 mg= 20 ml, PO, BIDPC</p>
      <p>captopril-hydrochlorothiazide 50 mg-25 mg oral tablet, 2 mL, APHA_IVPB, 12x/Day</p>
      <p>lisinopril, 20 mg, Oral</p>
      <p>quinapril, 10 mg/mL, Oral, 00_CHIA, PRN</p>
      <p><u>Home</u></p>
      <p>B-Caro-T 15 mg oral capsule, 30 mg= 2 cap(s), Oral</p>
      <p>doxycycline 20 mg oral tablet, $ee Instructions ucoe</p>
      <p>Grifulvin V 125 mg/5 mL oral suspension, 125 mg= 5mL, Oral</p>



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