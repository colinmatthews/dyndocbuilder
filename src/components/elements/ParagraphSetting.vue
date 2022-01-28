<template>
  <div style="display:flex;">
    <p class="label">Text</p>
    <input class="form-control mx-2" v-model="content" />
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