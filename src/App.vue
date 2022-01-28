<template>
  <div id="app" class="main-window bg-light ">
    <router-view></router-view>
  </div>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from './components/elements/Container.vue';
import Paragraph from './components/elements/Paragraph.vue';
import SettingPanel from './components/SettingPanel.vue'

import LeftNav from './components/LeftNav.vue'
import MainWindow from './components/TwoColumns.vue'
import TopNav from './components/TopNav.vue'

import Allergies from './components/elements/Allergies.vue'
import ColumnLarge from './components/elements/ColumnLarge.vue'
import ColumnSmall from './components/elements/ColumnSmall.vue'



export default {
  name: 'App',
  components: {
    Canvas, Editor, Frame, Paragraph, SettingPanel,Blueprint,
    LeftNav,
    TopNav,
    MainWindow

  },
  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph,Allergies,ColumnLarge,ColumnSmall,
      },
    };
  },
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body{
  font-family: 'Inter', sans-serif;
}
.main-window{
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}
.scrollable {
  overflow-y: scroll;
}
</style>