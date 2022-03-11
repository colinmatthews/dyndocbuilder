import HeaderSetting from '../components/settings/HeaderSetting.vue'
import { RefreshCcwIcon,DeleteIcon,CornerDownLeftIcon,EditIcon  } from 'vue-feather-icons'
export default {
    data(){
    return{
        active:false,
        defaultProps:{
            edit:true,
            refresh:true,
            deletes:true,
            freetext:true
        }
    }
  },
  components:{
    RefreshCcwIcon,
    DeleteIcon,
    CornerDownLeftIcon,
    EditIcon,
  },
  props: {
    content:String,
    edit:Boolean,
    refresh:Boolean,
    deletes:Boolean,
    freetext:Boolean
  },
  craft: {
    defaultProps: {
      edit:true,
      refresh:true,
      deletes:true,
      freetext:true
    },
    settings: {
      HeaderSetting,
    },
  },
}