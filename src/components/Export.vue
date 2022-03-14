
<template>
  <div style="float:right;">
    <button type="button" 
    @click="exportHelper()"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Export
  </button>
  </div>
</template>

<script>
import EditorFetchState from '../helpers/EditorFetchState.js'
import { mapState,mapActions } from 'vuex';
export default {
  inject: [
    'editor',
  ],
  mixins:[EditorFetchState],
  data() {
    return {
      loaded:false
    };
  },
  computed:{
    ...mapState([
      'blocks',
      'documents'
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
    }

  },
  methods: {
    ...mapActions([
      'updateDocumentJSON'
    ]),
    doExport() {
      this.plainData = this.editor.export();
    },
    doImport() {
      this.editor.import(this.plainData);
    },
    exportHelper(){
      const editorJSON = JSON.parse(this.editor.export());
      let htmlDocument
      //single column view
      if(editorJSON.length == 1){
         htmlDocument = this.traverseEditorState(editorJSON[0])
      }
      // two column view
      else if(editorJSON.length == 2){
        const columnOne = this.traverseEditorState(editorJSON[0])
        const columnTwo = this.traverseEditorState(editorJSON[1])
        //TODO: make this the actual cerner format. Maybe import from another file to keep it clean
        const openHTML = "<div>"
        const closeHTML = "</div>"
        htmlDocument = openHTML + columnOne + columnTwo + closeHTML

      }

      this.download("document.html",htmlDocument)
      

    },
    traverseEditorState(jsonObj){
    /* 
       Rescurive function
       Input: json representation of component tree
       Base state: Bottom of tree (component has no children)
       Output: HTML representation of all components in tree
    */
      const block = this.blocks.filter(obj => {
          return obj.component == jsonObj.componentName
      })
      if(jsonObj.children.length == 0) return this.buildHTMLString(jsonObj)
      
      const openTag = block[0].openTag
      const closeTag = block[0].closeTag
      let result = openTag 
      for (let innerState of jsonObj.children){
        result += this.traverseEditorState(innerState)
      }
      return result + closeTag

    },
    buildHTMLString(jsonObj){
      try{
        let html
        const componentProps = jsonObj.props
        const title = jsonObj.componentName
        const blocks = this.blocks
        let block = blocks.filter(obj => {
          return obj.title == title
        })
        block = block[0]
        
        if(block.type){ // check for a block type in vuex
          switch(block.type){
            case "plaintext":
              const text = this.generatePlainText(componentProps)
              html = "<div>" + text + "</div>"
          }
        }
        else{
          const wrapperDiv = this.generateWrapperDiv(componentProps)
          const titleSpan = this.generateTitleSpan(componentProps)
          const emrContent = block.html
          html = wrapperDiv + titleSpan + emrContent + "</div>"
        }
        return html
      }
      catch(e){
        console.log(e)
      }
    },

    generateWrapperDiv(componentProps){
     //<div class="ddsection ddrefreshable ddinsertfreetext ddremovable" style="padding:4px;" dd:sectioncode="LOINC!10154-3">
      let wrapperDiv = `<div class="ddsection `
      if(componentProps.edit){
        wrapperDiv += "ddfreetext "
      }
      if(componentProps.deletes){
        wrapperDiv + "ddremovable "
      }
      if(componentProps.refresh){
        wrapperDiv += "ddrefreshable "
      }
      if(componentProps.freetext){
        wrapperDiv += "ddinsertfreetext "
      }
      wrapperDiv += `"> `
      return wrapperDiv
    },

    generateTitleSpan(componentProps){
      //<span class="ddsectiondisplay"><span style="font-weight:bold;text-decoration:underline;">Chief Complaint</span></span>
      let titleSpan = `<span class="ddsectiondisplay"><span style="font-weight:bold;text-decoration:underline;">`
      if(componentProps.content){
        titleSpan += componentProps.content
      }
      titleSpan += "</span></span>"
      return titleSpan
    },

    generatePlainText(componentProps){
      console.log(componentProps)
      let text = `<p>`
      if(componentProps.content){
        text += componentProps.content
      }
      text += "</p>"
      return text
    },

    download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', 'document.html');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
  },
};
</script>