import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blocks:[
      {
        id:1,
        title:"Canvas",
        image:null,
        component:"Container",
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:2,
        title:"Paragraph",
        image:null,
        component:"Paragraph",
        html:"<p>{{content}}</p>",
        openTag:"",
        closeTag:""
        
      },
      {
        id:3,
        title:"Allergies",
        image:null,
        component:"Allergies",
        html:`<div class="ddemrcontent" dd:contenttype="ALLERGIES" dd:referenceuuid="1446A201-FD91-4A82-B645-306DC948DC48"></div>`,
        openTag:"",
        closeTag:""
      },
      {
        id:4,
        title:"ColumnLarge",
        image:null,
        component:"ColumnLarge",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:5,
        title:"ColumnSmall",
        image:null,
        component:"ColumnSmall",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
