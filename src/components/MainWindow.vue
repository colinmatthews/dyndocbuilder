<template>
   <b-card>
    <Frame component="div" class="preview-panel">
      <Canvas component="Container">
        <Paragraph content="demo text" />
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
   border: 2px solid red;
  border-radius: 5px;
}

</style>