<template>
  <b-card class="mx-2" style="height:100%;">
    <h4>Blocks</h4>
    <BlocksSearch />
    <hr>
    <BlocksGrid />
    
  </b-card>
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

</style>