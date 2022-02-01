
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
import { mapState } from 'vuex';
export default {
  inject: [
    'editor',
  ],
  data() {
    return {
      plainData: '',
      progressNote:[
        {"componentName":"Canvas","props":{"component":"ColumnLarge"},"children":[{"componentName":"ChiefComplaint","props":{},"children":[],"addition":{},"uuid":"e97817ac-35a6-4396-9e96-1d5ce36d45a3"},{"componentName":"HospitalCourse","props":{},"children":[],"addition":{},"uuid":"9579fd83-0baf-4456-9eec-de917c855b24"},{"componentName":"AssessmentAndPlan","props":{},"children":[],"addition":{},"uuid":"30bcf6cf-5b42-493d-8f57-94b1734270c0"}],"addition":{},"uuid":"c053c9f8-611a-4c12-8dbd-841543c9f57a"},{"componentName":"Canvas","props":{"component":"ColumnSmall"},"children":[{"componentName":"Allergies","props":{},"children":[],"addition":{},"uuid":"aae0968e-1e2d-4002-9cc0-4bc6f0f773de"},{"componentName":"LabResults","props":{},"children":[],"addition":{},"uuid":"4c57d944-b094-44f3-a4fd-11f8222d433f"}],"addition":{},"uuid":"440682b3-0ee4-4db7-aff4-0443a4024730"}
      ]
    };
  },
  computed:{
    ...mapState([
      'blocks'
    ]),
    documentId(){
      return this.$route.params.id
    }
  },
  mounted(){
    if(this.documentId == 1){
      const jsonValue = JSON.stringify(this.progressNote)
      this.editor.import(jsonValue)
    }
  },
  methods: {
    doExport() {
      this.plainData = this.editor.export();
    },
    doImport() {
      this.editor.import(this.plainData);
    },
    exportHelper(){
      console.log(this.blocks)
      const editorJSON = JSON.parse(this.editor.export());
      let htmlDocument
      //single column view
      if(editorJSON.length == 1){
         htmlDocument = this.formatToHTML(editorJSON[0])
      }
      // two column view
      else if(editorJSON.length == 2){
        const columnOne = this.formatToHTML(editorJSON[0])
        const columnTwo = this.formatToHTML(editorJSON[1])
        const openHTML = "<div>"
        const closeHTML = "</div>"
        htmlDocument = openHTML + columnOne + columnTwo + closeHTML

      }

      this.download("document.html",htmlDocument)
      

    },
    formatToHTML(jsonObj){
      console.log(jsonObj)
      const block = this.blocks.filter(obj => {
          return obj.component == jsonObj.componentName
      })
      const openTag = block[0].openTag
      const closeTag = block[0].closeTag
      let result = openTag
      
      if(jsonObj.children.length == 0) return this.buildHTMLString(jsonObj)
      for (let innerState of jsonObj.children){
        result += this.formatToHTML(innerState)
      }
      return result + closeTag

    },
    buildHTMLString(jsonObj){
      try{
        const title = jsonObj.componentName
        const blocks = this.blocks
        const block = blocks.filter(obj => {
          return obj.title == title
        })
        
        let html = block[0].html
        const replaceContent = html.indexOf("{{content}}" != -1)
        if(replaceContent){
          let updatedHTML = html.replace("{{content}}", jsonObj.props.content)
          html = updatedHTML
        }
        return html
      }
      catch(e){
        console.log(e)
      }
    },
    getHTMLTag(type,title){
      const block = this.blocks.filter(obj => {
          return obj.title == title
      })
      if(type == "open"){
        return block.openTag
      }
      if(type == "close"){
        return block.closeTag
      }
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