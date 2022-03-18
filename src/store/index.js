import Vue from 'vue'
import Vuex from 'vuex'
import blocks from './blocks'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    blocks:blocks.data,
    authenticated:false,
    user:{},
    documents:[]
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
    },
    setDocumentById(state,documentData){
      console.log(documentData)
      const index = state.documents.findIndex(el => el.id == documentData.documentID )
      state.documents[index].documentJSON = documentData.documentJSON
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
    },

    async updateDocumentJSON({commit,state},documentData){
      
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/documents/id"
      await this.$http.put(url, documentData, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit("setDocumentById",documentData)
      })
      .catch(err => {
        console.log(err)
      })
    },

    async getUser({commit,state}){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/users"
      await this.$http.get(url, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit("setUser",res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
  },

  
})
