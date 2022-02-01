<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Physical Exam</b></u></p>
  <div style="padding-left:10px;">
    <p><u>Vitals and Measurements</u></p>
    <p><b>T:</b>22 *C (Oral)<b> HR:</b>26(Peripheral) <b> SpO2:</b>88%</p>
  </div>
  <p><b>General Appearance:</b> Alert,oriented to person, place, time, well appearing, normal ability to communicate </p>
  <p><b>HEENT:</b> Normal, no headace or sore throat</p>
  <p><b>Neck:</b >Normal, no masses</p>
  <p><b>Chest:</b> Minor chest pain, wheezing</p>
  <p><b>GI:</b> Normal</p>
  <p><b> Musculo-skeletal:</b>Normal</p>
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