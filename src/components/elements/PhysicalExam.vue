<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u><b>{{content}}</b></u></p>
      <div style="padding-left:10px;">
        <p><u>Vitals and Measurements</u></p>
        <p><b>T:</b>22 *C (Oral)<b> HR:</b>26(Peripheral) <b> SpO2:</b>88%</p>
      </div>
      <p><b>General Appearance:</b> Alert,oriented to person, place, time, well appearing, normal ability to communicate </p>
      <p><b>HEENT:</b> Normal, no headace or sore throat</p>
      <p><b>Neck:</b >Normal, no masses</p>
      <p><b>Chest:</b> Minor chest pain, wheezing</p>
      <p><b>GI:</b> Normal</p>
      <p><b> Musculo-skeletal:</b>Normal</p>
  </GenericComponent>
</template>
<script>
import GenericComponent from '../settings/GenericPhysicianComponent.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
  },
  craft: {
    defaultProps: {
      content: 'Physical Exam',
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