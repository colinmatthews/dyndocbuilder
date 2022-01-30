<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Hospital Course</b></u></p>
  <p>The patinet presented to the ER on january 31st, 2022 with a moderate pain in the left side of their chest and moderate trouble breathing. EKG finding demonstrated an actute myocardial infraction. </p>
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