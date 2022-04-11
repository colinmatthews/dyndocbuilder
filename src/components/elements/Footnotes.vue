<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <span class="text-sm">
          <p>[1] Progress Note; Surgeon MD, Demo 05/23/2023 15:55 EST</p>
          <p>[2] Radiology Report; Radiologist MD, Demo 05/22/2023 12:20 EST</p>
      </span>
  </GenericComponent>
</template>
<script>
import GenericComponent from '../settings/GenericPhysicianComponentSettings.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
  },
  
}
</script>

<style>

</style>