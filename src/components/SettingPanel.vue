<template>
<div class="py-1 settings-container">
  <div class="setting-panel mx-4">
    <div v-if="settings" class="settings">
      <component
        v-for="(component, name) in settings"
        :key="name"
        :is="component"
        :node="selectedNode"
      ></component>
    </div>
    <div style="">
      <button class="btn btn-danger mx-2" v-if="selectedNode" @click="removeElement">Delete</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  inject: [
    'editor',
  ],
  computed: {
    selectedNode() {
      return this.editor.selectedNode;
    },
    settings() {
      if (!this.selectedNode) {
        return null;
      }

      return this.editor.getSettings(this.selectedNode);
    },
  },
  methods: {
    removeElement() {
      return this.editor.removeNode(this.selectedNode);
    },
  }
};
</script>
<style scoped>
.setting-panel{
  display: flex;
  justify-content: flex-start;
}
.setting-panel div:last-child{
  margin-left: auto;
}
.settings-container{
  height: 50px;
  background-color:#ACAEB5;
  width: 100%;
}
</style>