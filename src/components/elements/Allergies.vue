<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>{{content}}</b></u></p>
  <p>amoxicillin</p>
  <p>bee pollen (Hives)</p>
  </div>
</template>

<script>
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
    data(){
    return{
        active:false
    }
  },
  props: {
    content: String,
  },
  craft: {
    defaultProps: {
      content: 'Allergies',
    },
    settings: {
      HeaderSetting,
    },
  },
}
</script>

<style>

</style>