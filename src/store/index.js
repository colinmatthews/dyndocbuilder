import Vue from 'vue'
import Vuex from 'vuex'
import blocks from './blocks'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    blocks:blocks.data,
    authenticated:false,
    user:{},
    documents:[],
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
    },
    setDocumentFirst(state,order){
     Vue.set(state.user,'viewed',order)
    },
    appendDocument(state,document){
      state.documents.push(document)
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

    async updateRecentlyViewed({commit,state},documentID){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/users/id"
      let order = state.user.viewed
      const id = state.documents.find(el => el.id == documentID ).id
      order = order.filter(item => item !== id);
      order.unshift(id);

      const data = {viewed:order}
      await this.$http.put(url,data, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit('setDocumentFirst',order)
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

    async createDocument({commit,state},type){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/documents"
      const data = {type:type}
      await this.$http.post(url,data, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit("appendDocument",res.data)
        const redirectString = "editor-" + type +"/" + res.data.id
        router.push(redirectString)
      })
      .catch(err => {
        console.log(err)
      })
    },
  },

  
})
