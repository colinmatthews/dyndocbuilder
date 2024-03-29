import { mapState,mapActions,mapMutations } from 'vuex';
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  inject: [
    'editor',
  ],
  data() {
    return {
      loaded:false,
      documentID:""
    };
  },
  computed:{
    ...mapState([
      'documents',
    ]),
     editorExport:function(){
      return this.editor.export();
    }
  },
  watch:{
    
    '$route'(to,from){
      const documentID = to.params.id
      if(documentID != 0){
        
        const doc = this.documents.find(doc => doc.id = documentID) 
        //console.log(jsonValue)
        this.editor.import(doc.documentJSON)
      }
    },
    editorExport:{
      handler(newValue,oldValue){
        console.log(this.documentID)
        if(this.loaded){
          this.updateDocumentJSON({documentJSON:newValue,documentID:this.documentID})
        }
      },
      deep:true
    },
    documents(newValue,oldValue){
      if(oldValue.length == 0 || oldValue == null){
        this.onLoad()
      }
    }
  },
  async mounted(){
    if (this.documents.length > 0){
      this.onLoad()
    }
  },
  methods: {
    ...mapActions([
      'updateDocumentJSON',
      'updateRecentlyViewed',
      'getDocuments',
    ]),
    onLoad(){
      const documentID = this.$route.params.id
      const doc = this.documents.find(doc => doc.id == documentID) 
      console.log(doc.documentJSON)
      this.editor.import(doc.documentJSON)
      this.$store.commit('setCurrentDocument',doc)
      this.loaded = true
      this.documentID = documentID
      this.updateRecentlyViewed(documentID)
      this.$store.commit("setBlockSearch","")
    }
  },
  
};
