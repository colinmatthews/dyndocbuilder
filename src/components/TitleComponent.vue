<template>
   <div>
       <div v-if="!editing" class="flex" @click="editing = true">
           <h1 class="text-lg font-medium" v-if="!editing">{{currentDocument.title}}</h1>
            <BIconPencilSquare class="ml-2 mt-2 color-gray-300" style=""/>
       </div>
       <div v-else class="flex" style="min-width:400px;">
            <label for="email" class="sr-only" v-if="editing">Title</label>
            <input type="email" name="email" id="title" :placeholder="currentDocument.title" v-model="newTitle"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full " 
            />
            <BIconCheck2Square class="ml-2 mt-1 cursor-pointer" @click="handleUpdateTitle()"/>
       </div>
  </div>
</template>

<script>
import {BIconPencilSquare,BIconCheck2Square} from 'bootstrap-vue'
import {mapActions, mapState} from 'vuex'
export default {
    components:{
        BIconPencilSquare,
        BIconCheck2Square
    },
    data(){
        return{
            editing:false,
            newTitle:""
        }
    },
    computed:{
        ...mapState([
            'currentDocument'
        ]),
    },
    methods:{
        ...mapActions([
            'updateTitle'
        ]),
        async handleUpdateTitle(){
            const data = {title:this.newTitle, documentID:this.currentDocument.id}
            await this.updateTitle(data)
            this.editing = false
        }
    }
}
</script>

<style>

</style>