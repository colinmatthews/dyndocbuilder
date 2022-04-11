<template>
  <GenericComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">

      <div class="mt-2">
        <b-table striped :items="items" :fields="fields">
             <template #row-details="row">
                 <b-row class="mb-2">
                    <b-col ><p>Additonal Instructions: <span class="pl-4">{{ row.item.additional_instructions }}</span></p></b-col>
                </b-row>
             </template>
        </b-table>
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
        fields:["with","when","contact_information"],
        items:[
            {
                with:"Surgeon MD, Demo",
                when:"03/25/2023 11:30 EST",
                contact_information:"1234 Example St\n Toronto,ON L6P 2K1",
                additional_instructions:"Take visit summary with you to the appointment",
                _showDetails:true
            },
            {
                with:"Family MD, Demo",
                when:"03/28/2023 11:30 EST",
                contact_information:"1234 Example St\n Toronto,ON L6P 2K1",
                additional_instructions:"",
                 _showDetails:true
            }
        ] 
    }
  },
  craft: {
    defaultProps: {
      content: 'Follow Up Instructions',
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