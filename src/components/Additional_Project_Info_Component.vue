<template>
  <div class="form-group row">
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-6">
          <h3>Additional Project Information</h3>
          <!-- Is emergency radio button -->
          <radio-button2-component
            :containerClasses="'form-group'"
            :idValue1="''"
            :idValue2="''"
            :radioButtonClasses="''"
            :radioButtonLabel1="'Yes'"
            :radioButtonLabel2="'No'"
            :radioButtonName="'isEmergency'"
            :radioButtonTitle="'Is an emergency'"
            :radioButtonValue1="'1'"
            :radioButtonValue2="'0'"
            :titleClasses="'cust-marg-bot-0'"
          ></radio-button2-component>
          <!-- Project status select list -->
          <select-list-component
            :containerClasses="'form-group'"
            :idValue="''"
            :selectData="projectStatusSelectOptions"
            :selectListTitle="'Project status'"
            :titleClasses="'cust-marg-bot-0'"
          ></select-list-component>
          <!-- Project timeline select list -->
          <select-list-component
            :containerClasses="'form-group'"
            :idValue="''"
            :selectData="projectTimelineSelectOptions"
            :selectListTitle="'Project timeline'"
            :titleClasses="'cust-marg-bot-0'"
          ></select-list-component>
          <!-- Property owner radio button -->
          <radio-button2-component
            :containerClasses="'form-group'"
            :idValue1="''"
            :idValue2="''"
            :radioButtonClasses="''"
            :radioButtonLabel1="'Yes'"
            :radioButtonLabel2="'No'"
            :radioButtonName="'isPropertyOwner'"
            :radioButtonTitle="'Is the property owner'"
            :radioButtonValue1="'1'"
            :radioButtonValue2="'0'"
            :titleClasses="'cust-marg-bot-0'"
          ></radio-button2-component>
          <!-- Is interested in financing radio button -->
          <radio-button2-component
            :containerClasses="'form-group'"
            :idValue1="''"
            :idValue2="''"
            :radioButtonClasses="''"
            :radioButtonLabel1="'Yes'"
            :radioButtonLabel2="'No'"
            :radioButtonName="'isInterestedFinancing'"
            :radioButtonTitle="'Is interested in financing'"
            :radioButtonValue1="'1'"
            :radioButtonValue2="'0'"
            :titleClasses="'cust-marg-bot-0'"
          ></radio-button2-component>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <button-component
            :buttonClasses="''"
            :buttonTitle="'Submit'"
            :buttonValue="'testButtonValue'"
            :clickFunction="searchConsumerFunction"
            :containerClasses="'text-right cust-marg-top-15'"
            :idValue="'submitButtonId'"
          ></button-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/Button_Component'
  import RadioButton2Component from '@/components/Radio_Button2_Component'
  import SelectListComponent from '@/components/Select_List_Component'

  export default {
    components: {
      'button-component': ButtonComponent,
      'radio-button2-component': RadioButton2Component,
      'select-list-component': SelectListComponent
    },
    methods: {
      searchConsumerFunction: function () {
        console.log('Submitting additional project information...')
      }
    },
    name: 'additionalProjectInfoComponent',
    props: [],
    data () {
      return {
        projectStatusSelectOptions: {
          planning: 'Planning',
          construction: 'Construction',
          complete: 'Complete'
        },
        projectTimelineSelectOptions: {
          flexible: 'Flixible',
          days1to3: '1 - 3 Days',
          week1: '1 Week',
          week2: '2 Weeks',
          month1: '1 Month'
        }
      }
    }
  }
</script>
