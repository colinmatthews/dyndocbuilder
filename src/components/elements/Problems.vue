<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Problems</b></u></p>
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