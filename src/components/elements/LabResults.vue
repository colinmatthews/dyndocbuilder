<template>
  <div
    class="pb-4 w-50"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Lab Results</b></u></p>
  <div>
    <b-table striped :items="items"></b-table>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:false,
      items:[
        {
          test_name:"WBC",
          test_result:"34x10^3/mcl (Critical)",
          date_time:"01/31/2022 17:53 EST"
        },
        {
          test_name:"RBC",
          test_result:"4.65x10^3/mcl",
          date_time:"01/31/2022 17:53 EST"
        },
        {
          test_name:"Sodium Lvl",
          test_result:"343 mEq/dl (Critical)",
          date_time:"01/31/2022 17:53 EST"
        },
         {
          test_name:"CO2",
          test_result:"28.0 mmol/L",
          date_time:"01/31/2022 17:53 EST"
        },
      ]
    }
  },

}
</script>

<style>
.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
   background-color: rgb(223, 241, 253);
}
</style>