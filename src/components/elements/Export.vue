
<template>
  <div style="float:right;">
    <div class="form-group">
      <textarea class="form-control" v-model="plainData"></textarea>
    </div>
    <button class="btn btn-primary mr-1" @click="exportHelper">Export</button>
    <button class="btn btn-secondary" @click="doImport">Import</button>
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
    };
  },
  computed:{
    ...mapState([
      'blocks'
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
      const block = this.blocks.filter(obj => {
          return obj.title == jsonObj.componentName
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