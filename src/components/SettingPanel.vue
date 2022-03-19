<template>

<div class="py-1 settings-container bg-gray-100 border-b w-full">
  <div class="setting-panel mx-4">
    <div v-if="settings" class="settings">
      <component
        v-for="(component, name) in settings"
        :key="name"
        :is="component"
        :node="selectedNode"
      ></component>
    </div>
    <div>
     <button @click="removeElement" v-if="selectedNode" type="button" class="inline-flex items-center px-3 py-2  mt-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Delete
    </button>
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
  width: 100%;
}
.settings{
  min-width: 60%;
}
</style>