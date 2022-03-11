<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><u><b>{{content}}</b></u></p>
      <div>
        <b-table striped :items="items"></b-table>
      </div>
  </GenericComponent>
</template>
<script>
import GenericComponent from './GenericComponent.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
  },
  data(){
    return{
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
  craft: {
    defaultProps: {
      content: 'Lab Results',
      edit:true,
      refresh:true,
      deletes:true,
      freetext:true
    },
    settings: {
      HeaderSetting,
    },
  },
}
</script>

<style>
.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
   background-color: rgb(223, 241, 253);
}
</style>