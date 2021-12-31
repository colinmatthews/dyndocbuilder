<template>
  <b-container>
    
    <b-row class="">
      <b-col >
      <Blueprint component="card" class="">
       <div class="grid-item-container">
        <p>Container</p>
       </div>
        <template v-slot:blueprint>
          <Canvas component="Container" />
        </template>
      </Blueprint>
      </b-col>
      <b-col>
      </b-col>
    </b-row>

    <b-row v-for="index in numberOfRows" :key="index" class="">
      <b-col 
      v-for="block in blocks" 
      :key="block.id" 
      class="border py-4 border-top-0" 
      :class="block.id % 2 == 0 ? 'border-right-0': ''"
      >
        <Blueprint component="card">
          <div
          class="grid-item-container"
          @dragenter="selected = block.id"
          @mouseleave="selected = null"
          :class="block.id == selected ? 'selected' : ''">
            <p>{{block.title}}</p>
          </div>
       
        <template v-slot:blueprint>
         <component :is="block.component" />
        </template>
      </Blueprint>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import {mapState} from 'vuex'
import {Blueprint, Canvas} from '@v-craft/core'

export default {
  components:{
    Blueprint,Canvas,
  },
  computed:{
    ...mapState(['blocks']),
    numberOfRows:function(){
      const length = this.blocks.length
      if(length % 2 == 0){
        return length / 2
      }
      return length / 2 + 1
    }
  },
  method:{
    isSelected(blockId){
      return blockId == this.selected
    }
  },
  data(){
    return{
      selected:null
    }
  }

}
</script>

<style>
.selected{
  color:red;
}
.grid-item-container{
  cursor: move;
  display: flex;
  justify-content: center;

}

</style>