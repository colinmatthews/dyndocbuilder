<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Chief Complaint</b></u></p>
  <p>Chest pain, shortness of breath </p>
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