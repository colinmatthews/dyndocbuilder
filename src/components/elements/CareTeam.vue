<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p>Admitting Physician:
        <span style="padding-left:10px;">
          <span>Admitting MD, Demo</span>
          <p style="padding-left:157px" >Surgeon MD, Demo</p>
        </span>
      </p>
      <p>Attending Physician:
        <span style="padding-left:10px;">
          <span>Attending MD, Demo</span>
        </span>
      </p>
      <p>Consulting Physician:
        <span style="padding-left:5px;">
          <span>Consulting MD, Demo</span>
        </span>
      </p>
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
      content: 'Care Team',
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