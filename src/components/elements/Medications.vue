<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Medications</b></u></p>
  <p>actaminophen, 320mg, 10ml, Oral, As Indicated, PRN </p>
  <p>albuterol 5mg/ml (0.5%) inhalation solution, 5 mg, 1 mL, Inhale, q6hr</p>
  <p>Ambien 10mg oral tablet, 5mg, 0.5 tabs, Oral, 2x/Wk, PRN</p>
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