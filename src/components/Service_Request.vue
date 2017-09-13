<template>
  <div class="serviceRequest cust-marg-left-15 cust-marg-right-15">
    <div class="row">
      <div class="col-sm-12">
        <h2>Service Request</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <search-consumer_component :consumers="consumers"></search-consumer_component>
        <div v-if="consumers && consumers.length > 0">
          <table5-selectable_component
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
            :tableTitle="'Multiple consumers found, please select a consumer from the list below'"
            :titleClasses="'text-left'"
          ></table5-selectable_component>
        </div>
      </div>
      <div class="col-sm-3">
        <service-professional-info-card-component
          :spData="serviceProfesional"
        ></service-professional-info-card-component>
        <consumer-info-card-component
          :consumerData="consumerSelected"
        ></consumer-info-card-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ConsumerInfoCardComponent from '@/components/Consumer_Info_Card_Component'
  import SearchConsumerComponent from '@/components/Search_Consumer_Component'
  import ServiceProfessionalInfoCardComponent from '@/components/Service_Professional_Info_Card_Component'
  import Table5SelectableComponent from '@/components/Table5_Selectable_Component'

  export default {
    components: {
      'consumer-info-card-component': ConsumerInfoCardComponent,
      'search-consumer_component': SearchConsumerComponent,
      'service-professional-info-card-component': ServiceProfessionalInfoCardComponent,
      'table5-selectable_component': Table5SelectableComponent
    },
    name: 'serviceRequest',
    data () {
      return {
        consumers: [
          {
            email: 'jsmith@email.com',
            firstName: 'John',
            id: '1',
            lastName: 'Smith',
            phone: '(303) 555-1234',
            state: 'CO',
            street: '1 Street Ave.',
            zipCode: '80123'
          },
          {
            email: 'jDoe@email.com',
            firstName: 'Jane',
            id: '2',
            lastName: 'Doe',
            phone: '(303) 555-1234',
            state: 'CA',
            street: '2 Street Ave.',
            zipCode: '80234'
          },
          {
            email: 'bAnderson@email.com',
            firstName: 'Bob',
            id: '3',
            lastName: 'Anderson',
            phone: '(303) 555-1234',
            state: 'DE',
            street: '3 Street Ave.',
            zipCode: '80345'
          },
          {
            email: 'bJones@email.com',
            firstName: 'Barb',
            id: '4',
            lastName: 'Jones',
            phone: '(303) 555-1234',
            state: 'WA',
            street: '4 Street Ave.',
            zipCode: '80456'
          }
        ],
        consumerSelected: {
          email: 'jsmith@email.com',
          firstName: 'John',
          id: '1',
          lastName: 'Smith',
          phone: '(303) 555-1234',
          state: 'CO',
          street: '1 Street Ave.',
          zipCode: '80123'
        },
        serviceProfesional: {
          affiliate: 'Thor',
          callUniqueId: '123123123',
          numberCalled: '(555) 555-5556',
          serverId: 'Infinity',
          spId: '12345',
          spLocation: 'Hello, WO',
          spName: 'ABC Company',
          spPhone: '(555) 555-5555',
          spRating: '4.8',
          spRatings: '10'
        }
      }
    }
  }
</script>
