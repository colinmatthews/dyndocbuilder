<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u><b>{{content}}</b></u></p>
      <div style="padding-left:10px;">
        <p><u>Ongoing</u></p>
        <div style="padding-left:10px;">
          <p>Hx of migraines</p>
        </div>
      </div>

      <div style="padding-left:10px;">
        <p><u>Historical</u></p>
        <div style="padding-left:10px;">
          <p>Chest pain</p>
        </div>
      </div>
  </GenericComponent>
</template>
<script>
import GenericComponent from './GenericComponent.vue'
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