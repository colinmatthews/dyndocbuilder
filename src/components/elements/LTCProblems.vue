<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u>Ongoing</u> - Any problem that you are currently receiving treatment for.</p>
      <p>At risk of venous thromboembolus</p>
      <p>Gestational diabetes mellitus, class A 1</p>
      <p>Multiple pregnancy</p>
      <p>ulcer</p>
      <p><u>Historical</u> - Any problem that you are no longer receiving treatment for.</p>
      <p>Congestive heart disease</p>
      <p>Pregnant</p>


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