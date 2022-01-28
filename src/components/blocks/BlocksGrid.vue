<template>
  <b-container class="scrollable left-nav-scroll">

    <b-row v-for="block in blocks" :key="block.index" class="">
      <div class="border border-bottom-0 w-100 px-0"  
      :class="[ block.id == selected ? 'selectedContainer' : '' ]"
      >
        <Blueprint component="card" >
          <div
          class="grid-item-container"
          @dragenter="selected = block.id"
          @mouseleave="selected = null"
          :class="block.id == selected ? 'selectedText' : ''">
            <img src="https://picsum.photos/200/100" />
            <hr />
            <p>{{block.title}}</p>
          </div>
       
        <template v-slot:blueprint>
         <component :is="block.component" />
        </template>
      </Blueprint>
      </div>
    </b-row>
    <hr/>
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
  text-align: center;
}

.grid-item-container p{
  font-weight:500 ;
  font-style: initial;
  font-size: 1.3rem;
}

.grid-item-container img{
  width: 90%;
  padding-top: 10px;
}
.grid-item-container hr{
  width: 65%;
}
.left-nav-scroll{
  height: 80vh;
}

</style>