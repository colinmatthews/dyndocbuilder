<template>
  <GenericPatientComponent
    :content="$attrs.content"
    :edit="$attrs.edit"
    :deletes="$attrs.deletes"
    :freetext="$attrs.freetext"
    :refresh="$attrs.refresh">
      <p><b>Temperature</b> (Rectal) </p>
      <p>24 C</p>
      <p><b>Temperature</b> (Axillary) </p>
      <p>25 C</p>
      <p><b>Temperature</b> (Oral) </p>
      <p>22 C</p>
      <p><b>Temperature</b> (Temporal Artery) </p>
      <p>23 C</p>
      <p><b>Heart Rate</b> (Peripheral) </p>
      <p>26</p>
      <p><b>Heart Rate</b> (Apical) </p>
      <p>27</p>
      <p><b>Respiratory Rate</b></p>
      <p>31</p>

  </GenericpatientComponent>
</template>
<script>
import GenericPatientComponent from '../settings/GenericPatientComponentSettings.vue'
import HeaderSetting from '../settings/HeaderSetting.vue'
export default {
  components:{
    GenericPatientComponent
  },
  craft: {
    defaultProps: {
      content: 'Discharge Vitals',
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

</style>