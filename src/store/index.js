import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    documents:[
      {
        title:"Surgical Progress Note",
        author:"Colin Matthews",
        contents:"",
        created:"January 30th",
        updated:"January 30th"
      }
    ],
    blocks:[
      {
        id:1,
        title:"Canvas",
        image:null,
        component:"Canvas",
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:2,
        title:"Paragraph",
        image:null,
        component:"Paragraph",
        html:"<p>{{content}}</p>",
        openTag:"",
        closeTag:""
        
      },
      {
        id:3,
        title:"Allergies",
        image:null,
        component:"Allergies",
        html:`<div class="ddemrcontent" dd:contenttype="ALLERGIES" dd:referenceuuid="1446A201-FD91-4A82-B645-306DC948DC48"></div>`,
        openTag:"",
        closeTag:""
      },
      {
        id:4,
        title:"ColumnLarge",
        image:null,
        component:"ColumnLarge",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:5,
        title:"ColumnSmall",
        image:null,
        component:"ColumnSmall",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:6,
        title:"Assessment and Plan",
        image:null,
        component:"AssessmentAndPlan",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:7,
        title:"Chief Complaint",
        image:null,
        component:"ChiefComplaint",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:8,
        title:"Hospital Course",
        image:null,
        component:"HospitalCourse",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:9,
        title:"Lab Results",
        image:null,
        component:"LabResults",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:10,
        title:"Medications",
        image:null,
        component:"Medications",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:11,
        title:"Physical Exam",
        image:null,
        component:"PhysicalExam",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:12,
        title:"Problems",
        image:null,
        component:"Problems",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      },
      {
        id:13,
        title:"Review of Symptoms",
        image:null,
        component:"ReviewOfSymptoms",
        html:``,
        openTag:"<div>",
        closeTag:"</div>"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
