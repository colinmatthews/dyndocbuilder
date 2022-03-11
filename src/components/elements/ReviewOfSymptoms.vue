<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u><b>{{content}}</b></u></p>
      <p><u><b>Review of Systems</b></u></p>
      <p><b>Constitutional:</b>Denies weight loss, fever and chills.</p>
      <p><b>HEENT:</b>Denies changes in vision and hearing.</p>
      <p><b>Respiratory:</b>Denies SOB and cough</p>
      <p><b>CV:</b>Denies palpitations and CP</p>
      <p><b>GI:</b>Denies abdominal pain, nausea, vomiting and diarrhea</p>
      <p><b>Musculo-skeletal:</b>Denies myalgia and joint pain</p>
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
      content: 'Problems',
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