<template>
  <div id="searchConsumerComponent" class="form-group row">
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-6">
          <h3>Search For Consumer</h3>
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
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
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
</template>

<script>
  import ButtonComponent from '@/components/Button_Component'
  import TextInputFieldComponent from '@/components/Text_Input_Field_Component'

  export default {
    components: {
      'button-component': ButtonComponent,
      'text-input-field-component': TextInputFieldComponent
    },
    methods: {
      searchConsumerFunction: function () {
        console.log('Searching for consumers...')
      }
    },
    name: 'searchConsumerComponent',
    props: ['consumers'],
    data () {
      return {}
    }
  }
</script>
