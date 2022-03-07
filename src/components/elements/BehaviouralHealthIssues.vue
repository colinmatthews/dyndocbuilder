<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Behavioral Health Issues</b></u></p>
  <p>Pulls from Comprehensive Care Plan Powerform</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:false
    }
  },

}
</script>

<style>

</style>