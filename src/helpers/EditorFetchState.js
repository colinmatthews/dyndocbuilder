import { mapState,mapActions } from 'vuex';
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  inject: [
    'editor',
  ],
  data() {
    return {
      loaded:false
    };
  },
  computed:{
    ...mapState([
      'documents',
      'token'
    ]),
     editorExport:function(){
      return this.editor.export();
    }
  },
  watch:{
    '$route'(to,from){
      const documentID = this.$route.params.id
      if(documentID != 0){
        
        const doc = this.documents.find(doc => doc.id = documentID) 
        //console.log(jsonValue)
        this.editor.import(doc.documentJSON)
      }
    },
    
    editorExport:{
      handler(newValue,oldValue){
        if(this.loaded){
          this.updateDocumentJSON({documentJSON:newValue,documentID:this.$route.params.id})
        }
      },
      deep:true
    },
    documents(newValue,oldValue){
      if(oldValue.length < 1){
        const documentID = this.$route.params.id

        if(documentID != 0){
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
        const doc = this.documents.find(doc => doc.id = documentID) 
        //console.log(jsonValue)
        this.editor.import(doc.documentJSON)
        this.loaded = true
      } 
    }
  },
  methods: {
    ...mapActions([
      'updateDocumentJSON',
    ]),
  }
};
