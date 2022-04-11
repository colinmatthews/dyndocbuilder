<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">

      <div>
        <b-table striped :items="items"></b-table>
      </div>
  </GenericComponent>
</template>
<script>
import GenericComponent from '../settings/GenericPhysicianComponentSettings.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericComponent
  },
  data(){
    return{
      items:[
        {
          result_name:"Dressing ADL",
          result:"Requires assistance (1)",
        },
        {
          result_name:"Toileting ADL",
          result:"Independent(2)",
        },
        {
          result_name:"ADL Index Score",
          result:"10",
        },
      ]
    }
  },
  craft: {
    defaultProps: {
      content: 'Functional/Cognitive',
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