<template>
  <div id="app">
    <Editor component='div' class="b-container" :resolverMap="resolverMap">
      <b-row>
        <TopNav />
      </b-row>
      <b-row>
        <b-col cols="3">
          <LeftNav />
        </b-col>
        <b-col cols="6">
          <MainWindow />
        </b-col>
        <b-col cols="3">
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
        Canvas, Container, Paragraph,
      },
    };
  },
};
</script>