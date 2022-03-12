import Vue from 'vue'
import Vuex from 'vuex'
import blocks from './blocks'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"",
    blocks:blocks.data,
    authenticated:false,
    user:{},
    documents:[
      {
        title:"Surgical Progress Note",
        author:"Colin Matthews",
        contents:"",
        created:"January 30th",
        updated:"January 30th"
      }
    ],
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    setAuthenticated(state,boolean){
      state.authenticated = boolean
    },
    setDocuments(state,documents){
      state.documents = documents
    },
    setToken(state,token){
      state.token = token
    }
  },
  actions: {
    async getDocuments({commit,state}){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/documents/"
      await this.$http.get(url, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit('setDocuments',res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
})
