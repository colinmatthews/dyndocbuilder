export default{
   data:[
        {
          id:1,
          title:"Canvas",
          image:null,
          component:"Canvas",
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:1,
          title:"Container",
          image:null,
          component:"Container",
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:2,
          title:"Paragraph",
          image:null,
          component:"Paragraph",
          html:"",
          openTag:"",
          closeTag:"",
          type:"plaintext"
          
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
          openTag:"",
          closeTag:""
        },
        {
          id:5,
          title:"ColumnSmall",
          image:null,
          component:"ColumnSmall",
          html:``,
          openTag:"",
          closeTag:""
        },
        {
          id:6,
          title:"Assessment and Plan",
          image:null,
          component:"AssessmentAndPlan",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="9EE022D1-07D8-4002-9E5B-6586B61DA9FE" dd:concept_cki="CERNER!3AAB66F1-295B-4ADA-BE1C-D2E29461E861"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:7,
          title:"Chief Complaint",
          image:null,
          component:"ChiefComplaint",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="ECF53099-D2D3-4DCC-B002-CCEED9C6A6BA"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:8,
          title:"Hospital Course",
          image:null,
          component:"HospitalCourse",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="B03472B3-2161-40C7-9A3D-0CF7FF75115E"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:9,
          title:"Lab Results (Physician)",
          image:null,
          component:"LabResults",
          html:`<div class="ddemrcontent" dd:contenttype="LABS_V2" dd:linkedrefresh="TESTS" dd:referenceuuid="F00A1650-AE55-4CC2-A86C-C8262A21A4A1"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:9,
          title:"Lab Results Tagged Only (Physician)",
          image:null,
          component:"LabResults",
          html:`<div class="ddemrcontent" dd:contenttype="LABS_V2" dd:linkedrefresh="TESTS" dd:querybyfilter="false" dd:referenceuuid="F00A1650-AE55-4CC2-A86C-C8262A21A4A1"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:10,
          title:"Medications",
          image:null,
          component:"Medications",
          html:`<div class="ddemrcontent" dd:contenttype="MEDICATIONS" dd:referenceuuid="381B1344-329A-4C22-8E0A-40F7D88D37AC"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:11,
          title:"Physical Exam",
          image:null,
          component:"PhysicalExam",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="A49BBBFA-2A02-4D05-87A4-D5BF2836522C" dd:concept="PE"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:12,
          title:"Problems",
          image:null,
          component:"Problems",
          html:`<div class="ddemrcontent" dd:contenttype="PROBLEMS" dd:referenceuuid="40FD47F5-E31A-4099-BA81-F5632CEA5A63"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:13,
          title:"Review of Systems",
          image:null,
          component:"ReviewOfSymptoms",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="41CF6777-D723-4474-83D5-3DC3B494F71A" dd:concept="ROS"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:14,
          title:"Advanced Directive (Patient)",
          image:null,
          component:"AdvancedDirectivePatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="BFD90E95-27DF-4AEE-989C-6A7AF37BC5FA"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:15,
          title:"Advanced Directive (Physician)",
          image:null,
          component:"AdvancedDirectivePhys",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="2001A4E5-8086-469C-8F15-7C3E62C9D70A"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:16,
          title:"Assessment and Plan (Diagnosis Only)",
          image:null,
          component:"AssessmentAndPlanDiagnosis",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="DEB03B3D-7ED9-449D-B8E2-334F5AA2996D" dd:concept_cki="CERNER!3AAB66F1-295B-4ADA-BE1C-D2E29461E861"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:17,
          title:"Assessment and Plan (Inpatient)",
          image:null,
          component:"AssessmentAndPlanInpatient",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="DEB03B3D-7ED9-449D-B8E2-334F5AA2996D" dd:concept_cki="CERNER!3AAB66F1-295B-4ADA-BE1C-D2E29461E861"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:18,
          title:"Assessment and Plan (Outpatient)",
          image:null,
          component:"AssessmentAndPlanOutpatient",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="85C1888F-5322-42AA-AFB5-972A980B6BDD" dd:concept_cki="CERNER!3AAB66F1-295B-4ADA-BE1C-D2E29461E861"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:19,
          title:"Behavioural Health Issues",
          image:null,
          component:"BehaviouralHealthIssues",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="F9651036-C2B3-42A0-B782-ED9699D9CF8F"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:20,
          title:"Care Team ",
          image:null,
          component:"CareTeam",
          html:`<div class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="DF358768-D939-4AAC-A86E-89595ECAD163"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:21,
          title:"Community Resources (Patient)",
          image:null,
          component:"CommunityResourcesPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="F530482C-4A2D-4A8E-B4A9-2E492561E4E0"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:22,
          title:"Community Resources (Physician)",
          image:null,
          component:"CommunityResourcesPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="50D93E46-20A6-4F60-91D0-5D5B0655605C"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:23,
          title:"Community Resources (Physician)",
          image:null,
          component:"CommunityResourcesPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="50D93E46-20A6-4F60-91D0-5D5B0655605C"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:24,
          title:"Devices And Equipment (Physician)",
          image:null,
          component:"DevicesAndEquipmentPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="D2D36578-30E0-43BF-9D58-AB61AF836BB6"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:24,
          title:"Devices And Equipment (Patient)",
          image:null,
          component:"DevicesAndEquipmentPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="D2D36578-30E0-43BF-9D58-AB61AF836BB6"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        /*
        TODO: Figure out waht this component should look like
        {
          id:25,
          title:"Diagnoses And Orders",
          image:null,
          component:"DiagnosesAndOrders",
          html:`<div class="ddemrcontent" dd:contenttype="DXORDERS" dd:referenceuuid="28ADF401-6012-454F-B8DF-CD5503253E54"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        */
        {
          id:26,
          title:"Diagnoses List (Physician)",
          image:null,
          component:"DiagnosesListPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="DIAGNOSES" dd:referenceuuid="12AF70F8-5460-46C7-9EAE-D05387420034"></div></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        
        {
          id:27,
          title:"Diagnoses List (Patient)",
          image:null,
          component:"DiagnosesListPatient",
          html:`<div class="ddemrcontent" dd:contenttype="DIAGNOSES" dd:referenceuuid="BB4D7BEC-C046-481D-8311-65659D75ED8F"></div></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        /*
        TODO: Figure out waht this component should look like
        {
          id:27,
          title:"Diagnoses List with Codes (Physician)",
          image:null,
          component:"DiagnosesListWithCodes",
          html:`<div class="ddemrcontent" dd:contenttype="DXORDERS" dd:referenceuuid="452F3AB9-0E42-4109-B3AA-90C883275262"></div></div></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        */
        {
          id:28,
          title:"Discharge Date",
          image:null,
          component:"DischargeDate",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="19570C91-55C6-4AA4-AAF5-67FC7A1BCF9D"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:29,
          title:"Discharge Disposition (Physician)",
          image:null,
          component:"DischargeDispositionPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="9AA511BE-577B-4C6D-B1F0-B9EAA60CA05C"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:30,
          title:"Discharge Disposition (Patient)",
          image:null,
          component:"DischargeDispositionPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="CB1601D3-1C01-4902-B4F4-2AC7C419229F"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:31,
          title:"Family History",
          image:null,
          component:"FamilyHistory",
          html:`<div class="ddemrcontent" dd:contenttype="FAMILYHX" dd:referenceuuid="1F1618D1-D181-4E00-9B64-51F4895E7626"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:32,
          title:"Follow Up Instructions (Physician)",
          image:null,
          component:"FollowUpInstructionsPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="FOLLOW_UP" dd:referenceuuid="9DC024E8-603C-4A6A-83EA-8A96FE7EB9D2"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:33,
          title:"Follow Up Instructions (Patient)",
          image:null,
          component:"FollowUpInstructionsPatient",
          html:`<div class="ddemrcontent" dd:contenttype="FOLLOW_UP" dd:referenceuuid="83F449B6-6106-46A4-8DD0-57D4ED4EB2AC"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:34,
          title:"Functional Cognitive (Physician)",
          image:null,
          component:"FunctionalCognitivePhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="84AFDA05-19B5-4667-8C1F-DC721F1AE024"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:35,
          title:"Functional Cognitive (Patient)",
          image:null,
          component:"FunctionalCognitivePatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="D11AAB14-A6C3-48C4-A730-70B587B17EF2"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:36,
          title:"Footnotes",
          image:null,
          component:"Footnotes",
          html:`<span class="ddemrcontent" dd:contenttype="FOOTNOTE" dd:querybyfilter="false" dd:referenceuuid="03B1CB1F-B571-4AA9-8115-8CDDD8F34A28"></span>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:37,
          title:"Future Orders",
          image:null,
          component:"FutureOrders",
          html:`<div class="ddemrcontent" dd:contenttype="ORDERS" dd:referenceuuid="1C84763A-A375-4218-9F40-D4BAE0800374"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:39,
          title:"Health Concerns",
          image:null,
          component:"HealthConcerns",
          html:`<div class="ddemrcontent" dd:contenttype="HEALTHCONCRN" dd:referenceuuid="EABE14DF-577E-4A05-918F-13135C5D4AFD"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:40,
          title:"History Of Present Illness",
          image:null,
          component:"HistoryOfPresentIllness",
          html:`<div class="ddemrcontent" dd:contenttype="DOC_COMP" dd:referenceuuid="50300668-B513-41B3-828B-0F6E57E9CA89" dd:concept="HPI"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:41,
          title:"Home Treatments (Physician)",
          image:null,
          component:"HomeTreatmentsPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="348244CD-47D5-49FD-978E-24EF64684E3F"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:42,
          title:"Home Treatments (Patient)",
          image:null,
          component:"HomeTreatmentsPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="CAD4121E-E027-481D-BBD9-50D1B46F9493"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:43,
          title:"Immunizations (Physician)",
          image:null,
          component:"ImmunizationsPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="IMMUNZTNS_V2" dd:referenceuuid="40E68F09-3679-4F48-A13D-5E13AFB1FF86"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:44,
          title:"Immunizations (Patient)",
          image:null,
          component:"ImmunizationsPatient",
          html:`<div class="ddemrcontent" dd:contenttype="IMMUNZTNS_V2" dd:referenceuuid="35AB29CD-071F-4191-810C-FD3CDA64C4B5"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:45,
          title:"Immunizations This Visit (Physician)",
          image:null,
          component:"ImmunizationsThisVisitPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="IMMUNZTNS_V2" dd:referenceuuid="101093D7-890B-4344-B1B1-1CCA2F8FDFB2"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:46,
          title:"Immunizations This Visit (Patient)",
          image:null,
          component:"ImmunizationsThisVisitPatient",
          html:`<div class="ddemrcontent" dd:contenttype="IMMUNZTNS_V2" dd:referenceuuid="4C8BA0DA-6B38-4D47-B74E-A498CD916643"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:47,
          title:"Implanted Devices (Physician)",
          image:null,
          component:"ImplantedDevicesPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="IMP_DEVICES" dd:referenceuuid="8FA34C2F-9666-454F-8F63-FEDB34F0A487"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:48,
          title:"Implanted Devices (Patient)",
          image:null,
          component:"ImplantedDevicesPatient",
          html:`<div class="ddemrcontent" style="padding-top: 4px;" dd:contenttype="IMP_DEVICES" dd:referenceuuid="D2CD2684-EC6D-4199-982D-490AC2F6AFCA"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:49,
          title:"Implanted Devices (Patient)",
          image:null,
          component:"ImplantedDevicesPatient",
          html:`<div class="ddemrcontent" style="padding-top: 4px;" dd:contenttype="IMP_DEVICES" dd:referenceuuid="D2CD2684-EC6D-4199-982D-490AC2F6AFCA"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:50,
          title:"Lab Results (Patient)",
          image:null,
          component:"LabResultsPatient",
          html:`<div class="ddemrcontent" dd:contenttype="LABS_V2" dd:linkedrefresh="TESTS" dd:referenceuuid="A0901198-34CD-4C8A-99A6-20BA621DE5DD"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:51,
          title:"Last Documented Assessment And Plan",
          image:null,
          component:"LastDocumentedAssessmentAndPlan",
          html:`<div class="ddemrcontent" dd:contenttype="LASTAP" dd:referenceuuid="14F1A29A-C151-4B86-BAEE-FEB6FD2EB897"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:52,
          title:"LTC Problems",
          image:null,
          component:"LTCProblems",
          html:`<div class="ddemrcontent" dd:contenttype="PROBLEMS" dd:referenceuuid="852772ED-0ACB-46DC-9013-39D0B7983066"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:53,
          title:"Medication Reconciliation (Physician)",
          image:null,
          component:"MedicationReconciliationPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="MEDS_REC" dd:referenceuuid="38E3449C-F362-4980-8B5A-4266BD63AD7A"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:54,
          title:"Medication Reconciliation Simple (Patient)",
          image:null,
          component:"MedicationReconciliationSimple",
          html:`<div class="ddemrcontent" dd:contenttype="MEDS_REC" dd:referenceuuid="B8D4BC5E-F5DA-4B58-AD98-F47875B51EEA"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:55,
          title:"Medication Reconciliation List (Patient)",
          image:null,
          component:"MedicationReconciliationListPatient",
          html:`<div class="ddemrcontent" dd:contenttype="MEDS_REC" dd:referenceuuid="B68EEB7D-FA90-41DC-A742-87E340AC0EB9"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:56,
          title:"Medication Reconciliation List With Next Dose (Patient)",
          image:null,
          component:"MedicationReconciliationListWithDosePatient",
          html:`<div class="ddemrcontent" dd:contenttype="MEDS_REC" dd:referenceuuid="B5D32EC1-7B0B-418B-83FB-64796A7ABECC"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:57,
          title:"Medications And Immunizations Administered (Patient)",
          image:null,
          component:"MedicationsAndImmunizationsAdministered",
          html:`<div class="ddemrcontent" dd:contenttype="MEDS_ADMIN" dd:referenceuuid="FEF918D9-FB43-45B0-81CA-F3819EA1ECE9"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:58,
          title:"Medications With Categories (Physician)",
          image:null,
          component:"MedicationsWithCategories",
          html:`<div class="ddemrcontent" dd:contenttype="MEDICATIONS" dd:referenceuuid="38AAD525-7E2C-40B1-8699-8969449048AB"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:59,
          title:"Mode Of Discharge Transportation",
          image:null,
          component:"ModeOfDischargeTransportation",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="EC665279-5D8B-4892-89DE-EC93E6B7BAE4"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:60,
          title:"One Plan Associations",
          image:null,
          component:"OnePlanAssociations",
          html:`<div class="ddemrcontent" dd:contenttype="CAREPLAN" dd:referenceuuid="25842DA8-2A0D-4CEC-B1E9-B3968A135AB8"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:61,
          title:"One Plan Goals",
          image:null,
          component:"OnePlanGoals",
          html:`<div class="ddemrcontent" dd:contenttype="GOALS" dd:referenceuuid="CD718290-2067-45E3-8C62-2A7B4B087150"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:62,
          title:"One Plan Strengths",
          image:null,
          component:"OnePlanStrengths",
          html:`<div class="ddemrcontent"  dd:contenttype="STRENGTHS" dd:referenceuuid="0B11CE55-26DB-4A8E-A6A9-755A2CDEF04F"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:63,
          title:"Patient Contact Information",
          image:null,
          component:"PatientContactInformation",
          html:`<div class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="D688B080-37F0-49FB-86CB-D6E199601A27"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:64,
          title:"Patient Full Name",
          image:null,
          component:"PatientFullName",
          html:`<span class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="48A18750-E486-48D4-BF32-4E8A4E214063">&#160;</span>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:65,
          title:"Patient Medical Record Information",
          image:null,
          component:"PatientMedicalRecordInformation",
          html:`<div class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="5363355B-6B01-45D2-A01E-B6AAEEB3ED5E"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:66,
          title:"Patient Nationality",
          image:null,
          component:"PatientNationality",
          html:`<div class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="5991C999-F0C9-4A35-94E3-B003475B2371"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:67,
          title:"Patient Medical Record Information",
          image:null,
          component:"PatientMedicalRecordInformation",
          html:`<div class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="165C11FB-7B7A-4AD6-91F6-D400F641D7FC"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:68,
          title:"Patient Medical Record Information",
          image:null,
          component:"PatientMedicalRecordInformation",
          html:`<div class="ddemrcontent" dd:contenttype="ENCNTRINFO" dd:referenceuuid="165C11FB-7B7A-4AD6-91F6-D400F641D7FC"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:69,
          title:"Patient Education (Physician)",
          image:null,
          component:"PatientEducationPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATIENT_ED" dd:referenceuuid="6C65333F-90F4-4D39-9943-D81B02F4157A"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:70,
          title:"Patient Education (Patient)",
          image:null,
          component:"PatientEducationPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATIENT_ED" dd:patedprovider="false" dd:referenceuuid="F3707019-8923-4277-873D-978A44984AFB"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:71,
          title:"Patient Goals",
          image:null,
          component:"PatientGoals",
          html:`<div class="ddemrcontent" dd:contenttype="GOALS" dd:referenceuuid="A15ABF2F-12E1-4022-AE82-8838D192B41B"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:72,
          title:"Patient Instructions",
          image:null,
          component:"PatientInstructions",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="A85DDAD1-9681-4B4C-AFD2-6ADBC2728A82"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:73,
          title:"Point Of Care Lab Testing (Patient)",
          image:null,
          component:"PointOfCareLabTestingPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="A85DDAD1-9681-4B4C-AFD2-6ADBC2728A82"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:74,
          title:"Point Of Care Lab Testing (Physician)",
          image:null,
          component:"PointOfCareLabTestingPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="A85DDAD1-9681-4B4C-AFD2-6ADBC2728A82"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:75,
          title:"Professional Skill Services (Physician)",
          image:null,
          component:"ProfessionalSkillServicesPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="845CE5C4-A451-415E-86F5-0E2661C607FE"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:75,
          title:"Professional Skill Services (Patient)",
          image:null,
          component:"ProfessionalSkillServicesPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="CA345EB9-0373-495A-84DB-0E8E1E7C55CE"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:75,
          title:"Radiology Results (Physician)",
          image:null,
          component:"RadiologyResultsPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="RADIOLOGY" dd:linkedrefresh="TESTS" dd:referenceuuid="607EB264-E5AA-4E18-9EBB-436AF1DAF0EF"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:76,
          title:"Radiology Results (Patient)",
          image:null,
          component:"RadiologyResultsPatient",
          html:`<div class="ddemrcontent" dd:contenttype="RADIOLOGY" dd:linkedrefresh="TESTS" dd:referenceuuid="607EB264-E5AA-4E18-9EBB-436AF1DAF0EF"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:76,
          title:"Recapitulation Of Stay (Physician)",
          image:null,
          component:"RecapitulationOfStayPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="B01B9680-496B-42B5-8CC5-DEFC428FA8E2"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:77,
          title:"Recapitulation Of Stay (Patient)",
          image:null,
          component:"RecapitulationOfStayPatient",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="85BC85DC-ACD7-487C-A0FB-106279998F10"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:78,
          title:"Referral Orders",
          image:null,
          component:"ReferralOrders",
          html:`<div class="ddemrcontent" dd:contenttype="ORDERS" dd:referenceuuid="193FCACA-0177-42FF-A069-39FC07A3D9DE"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:79,
          title:"Scheduled Appointments (Physician)",
          image:null,
          component:"ScheduledAppointmentsPhysician",
          html:`<div class="ddemrcontent" dd:contenttype="FUTURE_APPTS" dd:referenceuuid="18AF1EC5-77AB-4303-B720-E0006FBFA22F"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:80,
          title:"Scheduled Appointments (Patient)",
          image:null,
          component:"ScheduledAppointmentsPatient",
          html:`<div class="ddemrcontent" dd:contenttype="FUTURE_APPTS" dd:referenceuuid="877D911F-88C4-4F12-80FB-7C881ABC560A"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:81,
          title:"Social History",
          image:null,
          component:"SocialHistory",
          html:`<div class="ddemrcontent" dd:contenttype="SOCIALHX" dd:referenceuuid="9ACD8023-2144-40FE-9C08-6FA2B52CF5EF"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:82,
          title:"Tagged Images",
          image:null,
          component:"TaggedImages",
          html:`<div class="ddemrcontent" dd:contenttype="IMAGES" dd:querybyfilter="false" dd:referenceuuid="2D4D1119-2873-40E0-95AB-13A07C93662E"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:83,
          title:"Tagged Labs",
          image:null,
          component:"TaggedLabs",
          html:`<div class="ddemrcontent" dd:contenttype="LABS_V2" dd:referenceuuid="2AA0D748-E46A-4D4B-AD28-7E48CC6B3BB9"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:84,
          title:"Tagged Text",
          image:null,
          component:"TaggedText",
          html:`<div class="ddemrcontent" dd:contenttype="TAGTEXT" dd:referenceuuid="5D7E2B53-5802-4D24-9539-DA0235A5F36B"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:85,
          title:"Tests Pending",
          image:null,
          component:"TestsPending",
          html:`<div class="ddemrcontent" dd:contenttype="TESTSPENDING" dd:linkedrefresh="TESTS" dd:referenceuuid="D124E3D7-843A-4313-9C4B-B7E9F4C834EE"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:85,
          title:"Tests Pending With Time",
          image:null,
          component:"TestsPendingWithTime",
          html:`<div class="ddemrcontent" style="margin-top:10px;" dd:contenttype="TESTSPENDING" dd:linkedrefresh="TESTS" dd:referenceuuid="55695F0F-E66F-4B2B-AAE6-6DCD12751FE9"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:85,
          title:"Tests Performed",
          image:null,
          component:"TestsPerformed",
          html:`<div class="ddemrcontent" dd:contenttype="TESTSPENDING" dd:linkedrefresh="TESTS" dd:referenceuuid="55695F0F-E66F-4B2B-AAE6-6DCD12751FE9"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:85,
          title:"Vitals - Cardiology",
          image:null,
          component:"VitalsCardiology",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="18384EB5-72DA-45C4-98C3-F40BDCD73DFB"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:86,
          title:"Vitals - Neurology",
          image:null,
          component:"VitalsNeurology",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="7A04A1C3-29DC-4386-B814-C9C49DFE05C2"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:87,
          title:"Vitals - Urology",
          image:null,
          component:"VitalsUrology",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="C7DDB6AB-CF05-4BA4-850B-724B904CE6A9"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:88,
          title:"Vitals - This Visit",
          image:null,
          component:"VitalsThisVisit",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="9444551A-7801-4D57-A271-FD6C7BEB27B4"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:89,
          title:"Vitals - This Visit 24 Hours",
          image:null,
          component:"VitalsThisVisit24Hours",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="807F87CA-7318-455B-BC24-F1C6590A1F77"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
        {
          id:90,
          title:"Vitals (Patient)",
          image:null,
          component:"VitalsPatients",
          html:`<div class="ddemrcontent" dd:contenttype="PATCARE_MEAS" dd:referenceuuid="28734561-E0DB-4D1C-9424-17CB56078CEC"></div>`,
          openTag:"<div>",
          closeTag:"</div>"
        },
       


      ]
}