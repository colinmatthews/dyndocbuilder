<template>
   <b-card class="scrollable main-max-height mt-4 ml-4">
    <Frame component="div" class="preview-panel">
      <Canvas component="Container">
        <Paragraph content="demo text" />
      </Canvas>
    </Frame>
   </b-card>
</template>

<script>
import { Canvas, Frame, } from '@v-craft/core';
import Paragraph from './elements/Paragraph.vue'
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
  width: 100%;
}

</style>