<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><b>Goal:</b> Achieve and maintain optimal blood glucose levels (In Progress)</p>
      <p>Target Date: 12/31/2020 Progress Towards Goals: Progressing </p>
      <p><b>Activity:</b>Create action Plan with Provider (In Progress)</p>
      <p>Discipline: Case Management, Nursing, Interdisciplinary, Medical, Behavioral Health Performer: User, Test</p>
      <p><b>Goal:</b> Achieve and maintain optimal nutrition (In Progress)</p>
      <p><b>Long Term Goal:</b> I want to lose 5% of my body weight in 6 months (In Progress)</p>
      <p>Target Date : 03/31/2021</p>
      <p><b>Activity:</b> Create Action Plan with Provider (In Progress)</p>
      <p>Discipline: Case Management, Nursing, Interdisciplinary, Medical, Behavioral Health Performer: User, Test</p>
      <p><b>Activty:</b> Walking (In Progress)</p>
      <p>Performer: Schreur, Anna</p>
      <p>1 Time(s) every 1 day(s) for 60 minute(s)</p>
      <p><b>Short Term Goal:</b> Lose 10 lbs (In Progress)</p>
      <p>Target Date: 01/31/2021 Progress Towards Goal: Meeting</p>
      <p>Performer: Schreur, Anna</p>
      <p>1 Time(s) every 1 day(s) for 60 minute(s)</p>
      <p><b>Goal:</b> Identify contributors that increase feelings of anxiety (In Progress)</p>
      <p><b>Goal:</b> Reduce feelings of anxiety (In Progress)</p>
      <p> Target Date: 11/01/2022 Progress Towards Goal: Regressing </p>
      <p><b>Activty:</b> Create Action Plan With Provider (In Progress)</p>
      <p>Discipline: Case Management, Nursing, Interdisciplinary, Medical, Behavioral Health Performer: User, Test</p>


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
      content: 'Goals',
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