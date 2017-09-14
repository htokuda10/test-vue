<template>
  <div id="searchConsumerComponent" class="form-group row">
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-12">
          <h3>Search For Consumer
            <up-down-toggle-component
              :isContentVisible="contentVisible"
              :parentToggleFunction="upDownToggleComponentClickedFunction"
            ></up-down-toggle-component>
          </h3>
        </div>
      </div>
      <div class="row" v-show="contentVisible">
        <div class="col-sm-6">
          <div v-show="contentVisible">
            <!-- Zip code input -->
            <text-input-field-component
              :containerClasses="'text-left'"
              :idValue="'zipCodeInputId'"
              :inputClasses="'text-left'"
              :placeholderValue="'Zip Code'"
              :textInputTitle="'Zip Code'"
              :titleClasses="'cust-marg-bot-0 cust-marg-top-5'"
            ></text-input-field-component>
            <!-- Phone number input -->
            <text-input-field-component
              :containerClasses="'text-left'"
              :idValue="'phoneNumberInputId'"
              :inputClasses="'text-left'"
              :placeholderValue="'(###) ###-####'"
              :textInputTitle="'Phone Number'"
              :titleClasses="'cust-marg-bot-0 cust-marg-top-5'"
            ></text-input-field-component>
            <!-- Email input -->
            <text-input-field-component
              :containerClasses="'text-left'"
              :idValue="'emailAddressInputId'"
              :inputClasses="''"
              :placeholderValue="'example@email.com'"
              :textInputTitle="'Email Address'"
              :titleClasses="'cust-marg-bot-0 cust-marg-top-5'"
            ></text-input-field-component>
            <!-- Search button -->
            <button-component
              :buttonClasses="''"
              :buttonTitle="'Search'"
              :buttonValue="'testButtonValue'"
              :clickFunction="searchConsumerFunction"
              :containerClasses="'text-right cust-marg-top-15'"
              :idValue="'searchButtonId'"
            ></button-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/Button_Component'
  import TextInputFieldComponent from '@/components/Text_Input_Field_Component'
  import UpDownToggleComponent from '@/components/Up_Down_Toggle_Component'

  export default {
    components: {
      'button-component': ButtonComponent,
      'text-input-field-component': TextInputFieldComponent,
      'up-down-toggle-component': UpDownToggleComponent
    },
    methods: {
      upDownToggleComponentClickedFunction: function () {
        this.setContentVisible()
      },
      searchConsumerFunction: function () {
        console.log('Searching for consumers...')
      },
      setContentVisible: function () {
        this.contentVisible = !this.contentVisible
      }
    },
    name: 'searchConsumerComponent',
    props: ['consumers', 'isContentVisible'],
    watcher: {
    },
    data () {
      return {
        contentVisible: (this.isContentVisible === true)
      }
    }
  }
</script>
