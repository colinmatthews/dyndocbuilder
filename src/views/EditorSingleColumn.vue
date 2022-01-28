<template>
  <div id="app" class="main-window bg-light ">
    <Editor component='div' class="b-container h-100" :resolverMap="resolverMap">
      <b-row class="">
        <TopNav />
      </b-row>
      <b-row class="">
        <b-col cols="3" style="background-color:white;">
          <LeftNav />
        </b-col>
        <b-col cols="9">
           <b-row>
            <SettingPanel />
          </b-row>
          <b-row style="height:90%; width:100%;">
            <single-column />
          </b-row>
        </b-col>
      </b-row>
    </Editor>
  </div>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from '../components/elements/Container.vue';
import Paragraph from '../components/elements/Paragraph.vue';
import SettingPanel from '../components/SettingPanel.vue'

import LeftNav from '../components/LeftNav.vue'
import SingleColumn from '../components/SingleColumn.vue';
import TopNav from '../components/TopNav.vue'

import Allergies from '../components/elements/Allergies.vue'
import ColumnLarge from '../components/elements/ColumnLarge.vue'
import ColumnSmall from '../components/elements/ColumnSmall.vue'




export default {
  name: 'App',
  components: {
    Canvas, Editor, Frame, Paragraph, SettingPanel,Blueprint,
    LeftNav,
    TopNav,
    SingleColumn

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
.main-window{
  overflow-y: hidden;
  overflow-x: hidden;
}
.scrollable {
  overflow-y: scroll;
}
</style>