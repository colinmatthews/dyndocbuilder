import { mapState,mapActions,mapGetters } from 'vuex';
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
      'token'
    ]),
    document:function(){
      return this.$store.getters.getDocumentById(this.documentID)
    },
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
      if(oldValue.length < 1){
       

        if(this.documentID != 0){
          const doc = this.documents.find(doc => doc.id = documentID) 
          //console.log(jsonValue)
          this.editor.import(doc.documentJSON)
          this.loaded = true
        } 
      }
    }
  },
  mounted(){
    if(this.documents.length >= 1){
      const documentID = this.$route.params.id
      if(documentID != 0){
        const doc = this.documents.find(doc => doc.id == documentID) 
        //console.log(jsonValue)
        this.editor.import(doc.documentJSON)
        this.loaded = true
        this.documentID = documentID
        console.log('her')
        this.updateRecentlyViewed(documentID)
        console.log('her')
      } 
    }
  },
  methods: {
    ...mapActions([
      'updateDocumentJSON',
      'updateRecentlyViewed'
    ]),
  }
};
