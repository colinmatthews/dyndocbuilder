<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Review of Systems</b></u></p>
  <p><b>Constitutional:</b>Denies weight loss, fever and chills.</p>
  <p><b>HEENT:</b>Denies changes in vision and hearing.</p>
  <p><b>Respiratory:</b>Denies SOB and cough</p>
  <p><b>CV:</b>Denies palpitations and CP</p>
  <p><b>GI:</b>Denies abdominal pain, nausea, vomiting and diarrhea</p>
  <p><b>Musculo-skeletal:</b>Denies myalgia and joint pain</p>
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