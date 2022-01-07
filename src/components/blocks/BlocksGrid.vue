<template>
  <b-container>

    <b-row v-for="blockGroup in gridRowBlocks" :key="blockGroup.index" class="">
      <b-col v-for="block in blockGroup" :key="block.id" class="px-0">
      <div class="border py-4 border-top-0 w-100 px-0"  
      :class="[ block.id % 2 == 0 ? 'border-left-0': '', block.id == selected ? 'selectedContainer' : '' ]"
      >
        <Blueprint component="card" >
          <div
          class="grid-item-container"
          @dragenter="selected = block.id"
          @mouseleave="selected = null"
          :class="block.id == selected ? 'selectedText' : ''">
            <p>{{block.title}}</p>
          </div>
       
        <template v-slot:blueprint>
         <component :is="block.component" />
        </template>
      </Blueprint>
      </div>
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
      return Math.floor(length / 2) + 1
    },
    gridRowBlocks:function(){
      // Build arrays of 2 blocks for rendering in the grid
      let data = []
      let index = 0
      const length = this.blocks.length
      
      for (let i = 0; i < Math.floor(length / 2); i ++){
        data[i] = [this.blocks[i],this.blocks[i + 1]]
        index = i
      }
      // if uneven rows, add the last block in its own row
      if((length / 2) % 2 !== 0){
        data[index + 1] = [this.blocks[length - 1]]
      }
      console.log(data)
      return data
    }
  },
  method:{
    isSelected(blockId){
      return blockId == this.selected
    },
  },
  data(){
    return{
      selected:null
    }
  }

}
</script>

<style>
.selectedText{
  color:red;
  
}
.selectedContainer{
  background-color: gray;
}

.grid-item-container{
  cursor: move;
  display: flex;
  justify-content: center;

}

</style>