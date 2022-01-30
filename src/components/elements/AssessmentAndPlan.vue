<template>
  <div
    class="pb-4"
    @mouseover="active = true" 
    @mouseleave="active = false" 
    :class="active ? 'bg-light' : ''"
  >
  <p><u><b>Assessment/Plan</b></u></p>
  <ol>
    <li>1. Chest pain</li>
    <p class="bg-gray-100 h-4"></p>
    <li>2. Fever</li>
     <p class="bg-gray-100 h-4"></p>
  </ol>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:false
    }
  },

}
</script>

<style>
.gap{
  background-color: white;
  height: 10px;;
}

</style>