<template>
 
  <div class="w-full border-b">
    <label for="search" class="sr-only">Search</label>
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
         <b-icon-search class=""></b-icon-search>
      </div>
      <input v-model="search" id="search" style="height:50px" name="search" class="block w-full bg-gray-100 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search" />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:""
    }
  },
  watch:{
    search(newValue,oldValue){
      this.$store.commit('setBlockSearch',newValue)
    }
  }
}
</script>

<style>

</style>