
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
import EditorFetchState from '../helpers/EditorMountedFetchState.js'
import cernerExportWrapper from '../helpers/cernerExportWrapper'
import { mapState } from 'vuex';
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
    ])
  },

  methods: {
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
         const openHTML = cernerExportWrapper.open
         const endHTML = cernerExportWrapper.end
         const content = this.traverseEditorState(editorJSON[0])
         htmlDocument = openHTML + content + endHTML
      }
      // two column view
      else if(editorJSON.length == 2){
        const columnOne = this.traverseEditorState(editorJSON[0])
        const columnTwo = this.traverseEditorState(editorJSON[1])
      
        const openHTML = cernerExportWrapper.open
        const endHTML = cernerExportWrapper.end
        const twoColumnOpen = cernerExportWrapper["two-column-open"]
        const twoColumnFirstOpen = cernerExportWrapper["two-column-first-open"]
        const twoColumnFirstEnd = cernerExportWrapper["two-column-first-end"]
        const twoColumnSecondOpen = cernerExportWrapper["two-column-second-open"]
        const twoColumnSecondEnd = cernerExportWrapper["two-column-second-end"]
        const twoColumnEnd = cernerExportWrapper["two-column-end"]
        
        const fullColumnOne = twoColumnFirstOpen + columnOne + twoColumnFirstEnd
        const fullColumnTwo = twoColumnSecondOpen + columnTwo +twoColumnSecondEnd
        
        htmlDocument = openHTML + twoColumnOpen + fullColumnOne + fullColumnTwo + twoColumnEnd + endHTML
      }

      this.download("document.html",htmlDocument)
      

    },
    traverseEditorState(jsonObj){
      console.log(jsonObj)
    /* 
       Rescurive function
       Input: json representation of component tree
       Base state: Bottom of tree (component has no children)
       Output: HTML representation of all components in tree
    */
   
      const block = this.blocks.filter(obj => {
          console.log(obj)
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
          return obj.component == title
        })
        block = block[0]
        //TODO: add patient block type & case
        if(block.type){ 
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