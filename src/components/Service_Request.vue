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
        <search-consumer_component
          :consumers="consumers"
          :initialVisible="false"
        ></search-consumer_component>
        <div v-if="consumers && consumers.length > 0">
          <table5-selectable_component
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
            :dataArray="consumers"
            :tableClasses="'table table-hover'"
            :tableTitle="'Multiple consumers found, please select a consumer'"
            :titleClasses="'text-left'"
          ></table5-selectable_component>
        </div>
        <additional-project-info-component></additional-project-info-component>
      </div>
      <div class="col-sm-3">
        <service-professional-info-card-component
          :spData="serviceProfessional"
        ></service-professional-info-card-component>
        <consumer-info-card-component
          :consumerData="consumerSelected"
        ></consumer-info-card-component>
      </div>
    </div>
  </div>
</template>

<script>
  import AdditionalProjectInfoComponent from '@/components/Additional_Project_Info_Component'
  import ConsumerInfoCardComponent from '@/components/Consumer_Info_Card_Component'
  import SearchConsumerComponent from '@/components/Search_Consumer_Component'
  import ServiceProfessionalInfoCardComponent from '@/components/Service_Professional_Info_Card_Component'
  import ServiceRequestDataClass from '../../static/js/ServiceRequestData'
  import Table5SelectableComponent from '@/components/Table5_Selectable_Component'

  let ServiceRequestData = new ServiceRequestDataClass()

  export default {
    components: {
      'additional-project-info-component': AdditionalProjectInfoComponent,
      'consumer-info-card-component': ConsumerInfoCardComponent,
      'search-consumer_component': SearchConsumerComponent,
      'service-professional-info-card-component': ServiceProfessionalInfoCardComponent,
      'table5-selectable_component': Table5SelectableComponent
    },
    methods: {
      /**
       * consumerTableSelectClickFunction will update the consumer selected object when the user clicks on a consumer
       * in the consumer table.
       */
      consumerTableSelectClickFunction: function (selectedObject) {
        this.consumerSelected = selectedObject
      }
    },
    name: 'serviceRequest',
    data () {
      return {
        consumers: ServiceRequestData.getConsumersList(),
        consumerSelected: {},
        serviceProfessional: ServiceRequestData.getServiceProfessional()
      }
    }
  }
</script>
