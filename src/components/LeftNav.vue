<template>
  <div class="left-nav">
    <div class="sticky top-0">
      <BlocksSearch />
    </div>
    <div>
      <BlocksGrid />
    </div>
  </div> 
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