<template>
   <b-card class="scrollable main-max-height">
    <Frame component="div" class="preview-panel" style="display:flex">
      <Canvas component="ColumnLarge">
        <Paragraph content="demo text" />
      </Canvas>
      <Canvas component="ColumnSmall">
      </Canvas>
    </Frame>
   </b-card>
</template>

<script>
import { Canvas, Frame, } from '@v-craft/core';
import Paragraph from '../components/elements/Paragraph.vue'
export default {
  components:{
    Canvas,Frame,Paragraph
  }
}
</script>

<style>
.cf-node-selected{
   border: 1px dashed chocolate;
  border-radius: 5px;
}
.main-max-height{
  max-height: 85vh;
}

</style>