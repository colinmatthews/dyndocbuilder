<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <u>Given</u>
      <div class="pl-2">
        
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
          vaccine:"hepatitis B vaccine",
          date:"03/21/2023",
        },
        {
          vaccine:"covid19 pfizer vaccine",
          date:"03/21/2022",
        },
      ]
    }
  },
  craft: {
    defaultProps: {
      content: 'Immunizations This Visit',
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