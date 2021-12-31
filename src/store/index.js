import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blocks:[
      {
        id:1,
        title:"Paragraph",
        image:null,
        component:"Paragraph"
      },
      {
        id:2,
        title:"Container",
        image:null,
        component:"Paragraph"
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
