<template>
  <div id="app" class="main-window bg-light ">
    <Editor component='div' class="b-container h-100" :resolverMap="resolverMap">
      <b-row class="mb-3">
        <TopNav />
      </b-row>
      <b-row class="">
        <b-col cols="3">
          <LeftNav />
        </b-col>
        <b-col cols="7">
          <MainWindow />
        </b-col>
        <b-col cols="2">
          <SettingPanel />
        </b-col>
      </b-row>
    </Editor>
  </div>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from './components/elements/Container.vue';
import Paragraph from './components/elements/Paragraph.vue';
import SettingPanel from './components/elements/SettingPanel.vue'

import LeftNav from './components/LeftNav.vue'
import RightNav from './components/RightNav.vue'
import MainWindow from './components/MainWindow.vue'
import TopNav from './components/TopNav.vue'

import Allergies from './components/elements/Allergies.vue'

export default {
  name: 'App',
  components: {
    Canvas, Editor, Frame, Paragraph, SettingPanel,Blueprint,
    LeftNav,
    RightNav,
    TopNav,
    MainWindow

  },
  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph,Allergies
      },
    };
  },
};
</script>
<style >
.main-window{
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>