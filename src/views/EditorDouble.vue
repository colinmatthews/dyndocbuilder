<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
      <!-- Main content -->
      <Editor component='div' class="w-full" :resolverMap="resolverMap">
        <!-- Header bar -->
         <div class="flex-1 flex flex-col overflow-hidden">
          <header class="w-full">
            <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <div class="flex-1 flex justify-center px-4 sm:px-6">
                <div class="ml-auto pt-3" style="padding-left:20%">
                  <Title />
                </div>
                <div class="flex items-center space-x-4 sm:ml-6 sm:space-x-6" style="margin-left:auto">
                  <!-- Profile dropdown -->
                  <div as="div" class="relative flex-shrink-0">
                    <div>
                      <Export />
                    </div>
                  </div>
                  <div as="div" class="relative flex-shrink-0">
                    <div>
                      <LocalExport />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div class="flex-1 flex items-stretch overflow-hidden">
          <!-- Secondary column (hidden on smaller screens) -->
          <div class="hidden w-96 border-l border-gray-200 overflow-y-auto lg:block" style="background-color:white; max-height:93vh;">
            <LeftNav />
          </div>
          
          <main class="flex-1 overflow-y-auto">
            <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last"> 
              <SettingPanel />
              <TwoColumms />

            </section>
          </main>
          </div>
      </Editor>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from '../components/elements/Container.vue';
import Paragraph from '../components/elements/Paragraph.vue';
import SettingPanel from '../components/SettingPanel.vue'

import LeftNav from '../components/LeftNav.vue'
import TwoColumms from '../components/TwoColumns.vue'
import SingleColumn from '../components/SingleColumn.vue';
import TopNav from '../components/TopNav.vue'
import Title from '../components/TitleComponent.vue'

import ColumnLarge from '../components/elements/ColumnLarge.vue'
import ColumnSmall from '../components/elements/ColumnSmall.vue'
import Export from '../components/Export.vue'

import Allergies from '../components/elements/Allergies.vue'
import AssessmentAndPlan from '../components/elements/AssessmentAndPlan.vue'
import AssessmentAndPlanDiagnosis from '../components/elements/AssessmentAndPlanDiagnosis.vue'
import ChiefComplaint from '../components/elements/ChiefComplaint.vue'
import HospitalCourse from '../components/elements/HospitalCourse.vue'
import LabResults from '../components/elements/LabResultsPhysician.vue'
import Medications from '../components/elements/Medications.vue'
import PhysicalExam from '../components/elements/PhysicalExam.vue'
import Problems from '../components/elements/Problems.vue'
import ReviewOfSymptoms from '../components/elements/ReviewOfSymptoms.vue'
import AdvancedDirectivePatient from '../components/elements/AdvancedDirectivePatient.vue'
import AdvancedDirectivePhys from '../components/elements/AdvancedDirectivePhys.vue'
import AssessmentAndPlanOutpatient from '../components/elements/AssessmentAndPlanOutpatient.vue'
import AssessmentAndPlanInpatient from '../components/elements/AssessmentAndPlanInpatient.vue'
import BehaviouralHealthIssues from '../components/elements/BehaviouralHealthIssues'
import CareTeam from '../components/elements/CareTeam.vue'
import DevicesAndEquipmentPhysician from '../components/elements/DevicesAndEquipmentPhysician'
import DevicesAndEquipmentPatient from '../components/elements/DevicesAndEquipmentPatient'
import DiagnosesListPhysician from '../components/elements/DiagnosesListPhysician'
import DiagnosesListPatient from '../components/elements/DiagnosesListPatient'
import DischargeDate from '../components/elements/DischargeDate'
import DischargeDispositionPatient from '../components/elements/DischargeDispositionPatient'
import DischargeDispositionPhysician from '../components/elements/DischargeDispositionPhysician'
import FollowUpInstructionsPatient from '../components/elements/FollowUpInstructionsPatient'
import FollowUpInstructionsPhysician from '../components/elements/FollowUpInstructionsPhysician'
import FunctionalCognitivePatient from '../components/elements/FunctionalCognitivePatient'
import FunctionalCognitivePhysician from '../components/elements/FunctionalCognitivePhysician'
import Footnotes from '../components/elements/Footnotes'
import HealthConcerns from '../components/elements/HealthConcerns'
import FutureOrders from '../components/elements/FutureOrders.vue'
import ImplantedDevicesPhysician from '../components/elements/ImplantedDevicesPhysician.vue'
import ImplantedDevicesPatient from '../components/elements/ImplantedDevicesPatient.vue' 
import LabResultsPatient from '../components/elements/LabResultsPatient.vue'
import LTCProblems from '../components/elements/LTCProblems.vue'
import MedicationReconciliationPhysician from '../components/elements/MedicationReconciliationPhysician.vue'
import MedicationReconciliationSimple from '../components/elements/MedicationReconciliationSimple.vue'
import MedicationsWithCategories from '../components/elements/MedicationsWithCategories.vue'
import ModeOfDischargeTransportation from '../components/elements/ModeOfDischargeTransportation.vue'
import OnePlanAssociations from '../components/elements/OnePlanAssociations.vue'
import OnePlanGoals from '../components/elements/OnePlanGoals.vue'
import OnePlanStrengths from'../components/elements/OnePlanStrengths.vue' 
import PatientContactInformation from '../components/elements/PatientContactInformation.vue'
import PatientFullName from '../components/elements/PatientFullName.vue'
import PatientInstructions from '../components/elements/PatientInstructions.vue'
import PatientMedicalRecordInformation from '../components/elements/PatientMedicalRecordInformation.vue'
import PatientNationality from '../components/elements/PatientNationality.vue'
import ProcedureHistory from '../components/elements/ProcedureHistory.vue'
import ProfessionalSkillServicesPatient from '../components/elements/ProfessionalSkillServicesPatient.vue'
import ProfessionalSkillServicesPhysician from '../components/elements/ProfessionalSkillServicesPhysician.vue'
import RadiologyResultsPatient from '../components/elements/RadiologyResultsPatient.vue' 
import RadiologyResultsPhysician from '../components/elements/RadiologyResultsPhysician.vue'
import RecapitulationOfStayPatient from '../components/elements/RecapitulationOfStayPatient.vue'
import RecapitulationOfStayPhysician from '../components/elements/RecapitulationOfStayPhysician.vue'
import ReferralOrders from '../components/elements/ReferralOrders.vue'
import TestsPending from '../components/elements/TestsPending.vue'
import TestsPendingWithTime from '../components/elements/TestsPendingWithTime.vue'
import TestsPerformed from '../components/elements/TestsPerformed.vue'
import VitalsThisVisit from '../components/elements/VitalsThisVisit.vue'
import VitalsCardiology from '../components/elements/VitalsCardiology.vue'
import VitalsNeurology from '../components/elements/VitalsNeurology.vue'
import VitalsThisVisit24Hours from '../components/elements/VitalsThisVisit24Hours.vue'
import VitalsUrology from '../components/elements/VitalsUrology.vue'
import VitalsPatient from '../components/elements/VitalsPatient.vue'

import {mapState} from 'vuex'
export default {
  name: 'App',
  inject:[
    'editor'
  ],
  components: {
    Canvas, Editor, Frame, Paragraph, SettingPanel,Blueprint,
    LeftNav,
    TopNav,
    TwoColumms,
    SingleColumn,
    Title,
    Export,
    Container,
    Paragraph,
    Allergies,
    AssessmentAndPlan,
    AssessmentAndPlanDiagnosis,
    AdvancedDirectivePatient,
    AdvancedDirectivePhys,
    ChiefComplaint,
    HospitalCourse,
    LabResults,
    Medications,
    PhysicalExam,
    Problems,
    ReviewOfSymptoms,
    AssessmentAndPlanOutpatient,
    AssessmentAndPlanInpatient,
    CareTeam,
    BehaviouralHealthIssues,
    DevicesAndEquipmentPhysician,
    DevicesAndEquipmentPatient,
    DiagnosesListPhysician,
    DiagnosesListPatient,
    DischargeDate,
    DischargeDispositionPatient,
    DischargeDispositionPhysician,
    FollowUpInstructionsPatient,
    FollowUpInstructionsPhysician,
    FunctionalCognitivePatient,
    FunctionalCognitivePhysician,
    Footnotes,
    HealthConcerns,
    FutureOrders,
    ImplantedDevicesPhysician,
    ImplantedDevicesPatient,
    LabResultsPatient, 
    LTCProblems,
    MedicationReconciliationPhysician, 
    MedicationReconciliationSimple, 
    MedicationsWithCategories,
    ModeOfDischargeTransportation,
    OnePlanAssociations, 
    OnePlanGoals, 
    OnePlanStrengths, 
    PatientContactInformation, 
    PatientFullName,
    PatientInstructions,
    PatientMedicalRecordInformation, 
    PatientNationality, 
    ProcedureHistory, 
    ProfessionalSkillServicesPatient, 
    ProfessionalSkillServicesPhysician, 
    RadiologyResultsPatient, 
    RadiologyResultsPhysician, 
    RecapitulationOfStayPatient, 
    RecapitulationOfStayPhysician, 
    ReferralOrders,
    TestsPending,  
    TestsPendingWithTime, 
    TestsPerformed, 
    VitalsThisVisit, 
    VitalsCardiology, 
    VitalsNeurology, 
    VitalsThisVisit24Hours, 
    VitalsUrology,
    VitalsPatient  
  

  },
  data() {
    return {
      resolverMap: {
        Canvas, Container, ColumnLarge,ColumnSmall,
        Container,
        Paragraph,
        Allergies,
        AssessmentAndPlan,
        AssessmentAndPlanDiagnosis,
        AdvancedDirectivePatient,
        AdvancedDirectivePhys,
        ChiefComplaint,
        HospitalCourse,
        LabResults,
        Medications,
        PhysicalExam,
        Problems,
        ReviewOfSymptoms,
        AssessmentAndPlanOutpatient,
        AssessmentAndPlanInpatient,
        CareTeam,
        BehaviouralHealthIssues,
        DevicesAndEquipmentPhysician,
        DevicesAndEquipmentPatient,
        DiagnosesListPhysician,
        DiagnosesListPatient,
        DischargeDate,
        DischargeDispositionPatient,
        DischargeDispositionPhysician,
        FollowUpInstructionsPatient,
        FollowUpInstructionsPhysician,
        FunctionalCognitivePatient,
        FunctionalCognitivePhysician,
        Footnotes,
        HealthConcerns,
        FutureOrders,
        ImplantedDevicesPhysician,
        ImplantedDevicesPatient,
        LabResultsPatient, 
        LTCProblems,
        MedicationReconciliationPhysician, 
        MedicationReconciliationSimple, 
        MedicationsWithCategories,
        ModeOfDischargeTransportation,
        OnePlanAssociations, 
        OnePlanGoals, 
        OnePlanStrengths, 
        PatientContactInformation, 
        PatientFullName,
        PatientInstructions,
        PatientMedicalRecordInformation, 
        PatientNationality, 
        ProcedureHistory, 
        ProfessionalSkillServicesPatient, 
        ProfessionalSkillServicesPhysician, 
        RadiologyResultsPatient, 
        RadiologyResultsPhysician, 
        RecapitulationOfStayPatient, 
        RecapitulationOfStayPhysician, 
        ReferralOrders,
        TestsPending,  
        TestsPendingWithTime, 
        TestsPerformed, 
        VitalsThisVisit, 
        VitalsCardiology, 
        VitalsNeurology, 
        VitalsThisVisit24Hours, 
        VitalsUrology,
        VitalsPatient  

      }
    };
  },
  computed:{
    ...mapState([
      'currentDocument'
    ])
  }
}
</script>