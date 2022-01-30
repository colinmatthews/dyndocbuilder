<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
      <!-- Main content -->
      <Editor component='div' class="w-full" :resolverMap="resolverMap">
        <!-- Header bar -->
        <div class="flex-1 flex flex-col overflow-hidden">
          <header class="w-full">
            <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <div class="flex-1 flex justify-between px-4 sm:px-6">
                <div class="flex-1 flex mt 4">
  
                </div>
                <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  <!-- Profile dropdown -->
                  <div as="div" class="relative flex-shrink-0">
                    <div>
                      <Export />
                    </div>
                  </div>
                  <div as="div" class="relative flex-shrink-0">
                    <div>
                      <LocalExport />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div class="flex-1 flex items-stretch overflow-hidden">
          <!-- Secondary column (hidden on smaller screens) -->
          <div class="hidden w-96 border-l border-gray-200 overflow-y-auto lg:block" style="background-color:white; max-height:93vh;">
            <LeftNav />
          </div>
          
          <main class="flex-1 overflow-y-auto">
            <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last"> 
              <SettingPanel />
              <TwoColumms />

            </section>
          </main>
          </div>
      </Editor>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from '../components/elements/Container.vue';
import Paragraph from '../components/elements/Paragraph.vue';
import SettingPanel from '../components/SettingPanel.vue'

import LeftNav from '../components/LeftNav.vue'
import TwoColumms from '../components/TwoColumns.vue'
import SingleColumn from '../components/SingleColumn.vue';
import TopNav from '../components/TopNav.vue'

import ColumnLarge from '../components/elements/ColumnLarge.vue'
import ColumnSmall from '../components/elements/ColumnSmall.vue'
import Export from '../components/elements/Export.vue'

import Allergies from '../components/elements/Allergies.vue'
import AssessmentAndPlan from '../components/elements/AssessmentAndPlan.vue'
import ChiefComplaint from '../components/elements/ChiefComplaint.vue'
import HospitalCourse from '../components/elements/HospitalCourse.vue'
import LabResults from '../components/elements/LabResults.vue'


export default {
  name: 'App',
  inject:[
    'editor'
  ],
  components: {
    Canvas, Editor, Frame, Paragraph, SettingPanel,Blueprint,
    LeftNav,
    TopNav,
    TwoColumms,
    SingleColumn,
    Export,
    AssessmentAndPlan,
    ChiefComplaint,
    HospitalCourse,
    LabResults,
    ColumnLarge,
    ColumnSmall
  

  },
  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph,Allergies,ColumnLarge,ColumnSmall,AssessmentAndPlan,ChiefComplaint,HospitalCourse,LabResults,ColumnLarge,ColumnSmall
      }
    };
  }
}
</script>