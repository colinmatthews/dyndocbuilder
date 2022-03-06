<template lang="">
   <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
    <p><u><b>Chief Complaint</b></u></p>
    <p><u>Advance Directive</u> - Yes</p>
    <p style="padding-left:10px">Comments entered by Physician,Demo - This is a comment</p>
    <p><u>Advance Directive Additional Information</u> - No</p>
    <p><u>Advance Directive Date</u> - 04/21/2023</p>
    <p><u>Advance Directive Intent</u> - Not sure</p>
    <p><u>Advance Directive Intent Stated By</u> - Friend</p>
    <p><u>Advance Directive Location</u> - Unable to obtain copy</p>
    <p><u>Advance Directive Type</u> - Living will, medical power of attorney</p>
    <p><u>Advance Directive Directive Not Obtained</u> - Not available</p>
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
<style lang="">
    
</style>