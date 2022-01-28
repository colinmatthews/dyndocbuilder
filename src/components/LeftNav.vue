<template>
  <b-row class="px-4 left-nav">
    <b-col cols="2">
      <!-- <PageNavigation /> -->
    </b-col>
    <b-col cols="10">
      <BlocksSearch class="pt-4" />
      <hr>
      <BlocksGrid />
    </b-col> 
  </b-row>
</template>

<script>
import {BIconSearch} from 'bootstrap-vue'
import BlocksSearch from './blocks/BlocksSearch.vue'
import BlocksGrid from './blocks/BlocksGrid.vue'
export default {
  components:{
    BIconSearch,
    BlocksSearch,
    BlocksGrid
  }
}
</script>

<style>
.left-nav{
  background-color: white;
  height: 90vh;
}
.blocks-header{
  font-weight: 600;
  font-size: 2rem;
}
</style>