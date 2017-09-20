<template>
  <div class="serviceRequest cust-marg-left-15 cust-marg-right-15">
    <div class="row">
      <div class="col-sm-12">
        <h1>Service Request</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <!-- TODO The initial visible value can be set based on retrieved values. This will be hardcoded
        for now for testing functionality. -->
        <search-consumer-component
          :consumers="getConsumers"
          :isContentVisible="false"
        ></search-consumer-component>
        <!-- This will add and remove itself to/from the DOM on update of the consumers object. Fancy! ++-->
        <div v-if="getConsumers && getConsumers.length > 0">
          <table5-selectable-component
            :clickFunction="consumerTableSelectClickFunction"
            :columnKey1="'firstName'"
            :columnKey2="'lastName'"
            :columnKey3="'state'"
            :columnKey4="'phone'"
            :columnKey5="'email'"
            :columnName1="'First Name'"
            :columnName2="'Last Name'"
            :columnName3="'State'"
            :columnName4="'Phone'"
            :columnName5="'Email'"
            :dataArray="getConsumers"
            :isContentVisible="true"
            :isTabCollapsible="true"
            :tableClasses="'table table-hover'"
            :tableTitle="'Multiple consumers found, please select a consumer'"
            :titleClasses="'text-left'"
          ></table5-selectable-component>
        </div>
        <additional-project-info-component></additional-project-info-component>
      </div>
      <div class="col-sm-3">
        <service-professional-info-card-component></service-professional-info-card-component>
        <consumer-info-card-component></consumer-info-card-component>
      </div>
    </div>
    <!-- Reddit! -->
    <div class="row">
      <div class="col-sm-12">
        <div v-if="getRedditPosts && getRedditPosts.length > 0">
          <table5-selectable-component
            :clickFunction="redditTableSelectClickFunction"
            :columnKey1="'title'"
            :columnKey2="'author'"
            :columnKey3="'score'"
            :columnKey4="'num_comments'"
            :columnKey5="'created'"
            :columnName1="'Title'"
            :columnName2="'Author'"
            :columnName3="'Score'"
            :columnName4="'# of Comments'"
            :columnName5="'Created'"
            :dataArray="getRedditPosts"
            :isContentVisible="true"
            :isTabCollapsible="true"
            :tableClasses="'table table-hover'"
            :tableTitle="'Reddit Posts'"
            :titleClasses="'text-left'"
          ></table5-selectable-component>
        </div>
        <div class="row">
          <div class="col-sm-5">
            <text-input-field-component
              @enter="getRedditPostsFunction"
              :inputBindValue="inputBindValue"
              :containerClasses="'form-group'"
              :idValue="'searchTextInputField'"
              :inputClasses="'form-control'"
              @keyup="setRedditInputKeyUp"
              :placeholderValue="'Search for...'"
              :textInputTitle="'Search Reddit \'Aww\''"
              :titleClasses="''"
            ></text-input-field-component>
            <button-component
              :buttonClasses="'btn btn-primary'"
              :buttonTitle="'Get Reddit Posts!'"
              :buttonValue="'getRedditPosts'"
              :clickFunction="getRedditPostsFunction"
              :containerClasses="'input-group-btn text-right align-baseline'"
              :idValue="'getRedditPostBtn'"
            ></button-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AdditionalProjectInfoComponent from '@/components/Additional_Project_Info_Component'
  import ConsumerInfoCardComponent from '@/components/Consumer_Info_Card_Component'
  import SearchConsumerComponent from '@/components/Search_Consumer_Component'
  import ServiceProfessionalInfoCardComponent from '@/components/Service_Professional_Info_Card_Component'
  import Table5SelectableComponent from '@/components/Table5_Selectable_Component'
  import { mapGetters } from 'vuex'
  import ButtonComponent from './Button_Component.vue'
  import TextInputFieldComponent from './Text_Input_Field_Component.vue'

  export default {
    computed: {
      ...mapGetters([
        'getConsumers',
        'getConsumerSelected',
        'getRedditPosts',
        'getServiceProfessional'
      ])
      // These can be aliased by creating an object of key-values(key = alias, value = getter string).
      // ...mapGetters({
      //   consumerGetter: 'getConsumers',
      //   consumerSelectedGetter: 'getConsumerSelected',
      //   serviceProfessionalGetter: 'getServiceProfessional'
      // })
    },
    /* Not defining an alias, will use the component 'name' to the DOM tag. */
    components: {
      TextInputFieldComponent,
      ButtonComponent,
      AdditionalProjectInfoComponent,
      ConsumerInfoCardComponent,
      SearchConsumerComponent,
      ServiceProfessionalInfoCardComponent,
      Table5SelectableComponent
    },
    methods: {
      /**
       * consumerTableSelectClickFunction will update the consumer selected object when the user clicks on a consumer
       * in the consumer table.
       */
      consumerTableSelectClickFunction: function (selectedObject) {
        this.$store.dispatch('setConsumerSelected', selectedObject)
      },
      setRedditInputKeyUp: function (inputValue) {
        this.redditInputValue = inputValue
      },
      getRedditPostsFunction: function () {
        this.$store.dispatch('getRedditPosts', this.redditInputValue)
      },
      redditTableSelectClickFunction: function (selectedObject) {
        // Do nothing with this right now.
      }
    },
    name: 'serviceRequest',
    data () {
      return {
        inputBindValue: ''
      }
    }
  }
</script>
