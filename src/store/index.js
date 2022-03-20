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
    currentDocument:{},
    blockSearch:"",
    reauthRequired:true
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    setBlockSearch(state,string){
      state.blockSearch = string
    },
    setCurrentDocument(state,document){
      state.currentDocument = document
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
    setUserDisplayName(state,displayName){
      state.user.displayName = displayName
    },
    setReauthRequired(state,boolean){
      state.reauthRequired = boolean
    },
    setDocumentById(state,documentData){
      console.log(documentData)
      const index = state.documents.findIndex(el => el.id == documentData.documentID )
      state.documents[index].documentJSON = documentData.documentJSON
    },
    setRecentlyViewed(state,order){
     Vue.set(state.user,'viewed',order)
    },
    appendDocument(state,document){
      state.documents.push(document)
    },
    updateDocumentTitle(state,documentData){
      const index = state.documents.findIndex(el => el.id == documentData.documentID )
      Vue.set(state.documents[index],'title',documentData.title)
    },
    deleteDocument(state,documentID){
      const updatedDocuments = state.documents.filter(el => el.id != documentID)
      state.documents = updatedDocuments
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
        commit('setRecentlyViewed',order)
      })
      .catch(err => {
        console.log(err)
      })
    },

    async removeRecentlyViewed({commit,state},documentID){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/users/id"
      const order = state.user.viewed.filter(item => item !== documentID);
      const data = {viewed:order}
      await this.$http.put(url,data, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit('setRecentlyViewed',order)
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

    async updateTitle({commit,state},documentData){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/documents/id"
      await this.$http.put(url, documentData, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit("updateDocumentTitle",documentData)
      })
      .catch(err => {
        console.log(err)
      })
    },

    async deleteDocument({commit,state,dispatch},documentID){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/documents/id"
      await this.$http.delete(url, {headers: {"Authorization" : "Bearer " + state.token}, data:{documentID:documentID}}).then(res => {
        commit("deleteDocument",documentID)
      })
      .catch(err => {
        console.log(err)
      })
      await dispatch('removeRecentlyViewed',documentID)
    },

    async updateUserDisplayName({commit,state},displayName){
      let url = process.env.VUE_APP_FUNCTIONS_URL +"/users/id"
      await this.$http.put(url, {displayName:displayName}, {headers: {"Authorization" : "Bearer " + state.token}}).then(res => {
        commit("setUserDisplayName",displayName)
      })
      .catch(err => {
        console.log(err)
      })
    },
  }
})
