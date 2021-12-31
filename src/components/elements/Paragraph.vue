<template>
  <p 
  @mouseover="active = true" 
  @mouseleave="active = false" 
  :class="active ? 'bg-light' : ''"
  >{{ content }}</p>
</template>

<script>
import ParagraphSetting from './ParagraphSetting.vue';
export default {
  props: {
    content: String,
  },
  data(){
    return{
      active:false
    }
  },
  // We introduce a craft config attribute in vue's component option,
  // that can define the default props of our page element.
  craft: {
    defaultProps: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    settings: {
      ParagraphSetting,
    },
  },
};
</script>