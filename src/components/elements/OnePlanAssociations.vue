<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><b>Uninsured.</b> (active) </p>
      <p><b>Diabetes Mellitus Type 1</b> (active) </p>
      <p><b>Goal:</b> Find healthy ways to deal with stress (In Progress) </p>
      <p>Progress Towards Goal: Progressing</p>
      <p><b>Goal: </b> Manage your weight through proper nutrition (In Progress) </p>
      <p><b>Goal: </b> Manage your weight through regular physical activity (In Progress) </p>
      <p><b>Goal: </b> Quit smoking (In Progress) </p>
      <p><b>Housing</b> (active) </p>

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
      content: 'These Are Your Health Concerns and Goals',
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