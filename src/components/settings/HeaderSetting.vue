<template>
  <div style="display:flex;" class="w-full">
    <p class="label">Title</p>
    <input class="form-control mx-2"  v-model="content" />
    <div class="pl-3 pt-2">
      <div class="flex items-center h-5 mr-2">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model="refresh" /> 
          <label for="comments" class=" pl-1 pt-1 font-medium text-gray-700" @click.prevent="">Refresh</label>
     </div>
    </div>
    <div class="pl-3 pt-2">
      <div class="flex items-center h-5 mr-2">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model="deletes" /> 
          <label for="comments" class=" pl-1 pt-1 font-medium text-gray-700" @click.prevent="">Delete</label>
     </div>
    </div>
    <div class="pl-3 pt-2">
      <div class="flex items-center h-5 mr-2">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model="freetext" /> 
          <label for="comments" class=" pl-1 pt-1 font-medium text-gray-700" @click.prevent="">Freetext</label>
     </div>
    </div>
    <div class="pl-3 pt-2">
      <div class="flex items-center h-5 mr-2">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model="edit" /> 
          <label for="comments" class=" pl-1 pt-1 font-medium text-gray-700" @click.prevent="">Edit</label>
     </div>
    </div>
  </div>
</template>

<script>
import { settingMixin } from '@v-craft/core';

export default {
  mixins: [settingMixin],
  computed: {
    content: {
      get() {
        return this.elementProps.content;
      },
      set(value) {
        this.updateContent(value);
      },
      
    },
    deletes: {
      get() {
        return this.elementProps.deletes;
      },
      set(deletes) {
        this.elementPropsSetter({ deletes })
      },
    },
    edit: {
      get() {
        return this.elementProps.edit;
      },
      set(edit) {
        this.elementPropsSetter({ edit })
      },
      
    },
    freetext: {
      get() {
        return this.elementProps.freetext;
      },
      set(freetext) {
        this.elementPropsSetter({ freetext })
      },
      
    },
    refresh: {
      get() {
        return this.elementProps.refresh;
      },
      set(refresh) {
        this.elementPropsSetter({ refresh })
      },
      
    },
    
  },
  methods: {
    updateContent(content) {
      this.elementPropsSetter({ content });
    },
  },
};
</script>
<style>
.label{
  margin-top:5px;
  font-weight: 600;
}
</style>