<template>
  <div class="serviceRequest container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Service Request</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <search-consumer_component :consumers="consumers"></search-consumer_component>
        <div v-if="consumers && consumers.length > 0">
          <table3-selectable_component
            :columnKey1="'firstName'"
            :columnKey2="'lastName'"
            :columnKey3="'state'"
            :columnName1="'First Name'"
            :columnName2="'Last Name'"
            :columnName3="'State'"
            :dataArray="consumers"
            :tableClasses="'table table-hover'"
            :tableTitle="'Multiple consumers found, please select a consumer from the list below'"
            :titleClasses="'text-left'"
          ></table3-selectable_component>
        </div>
      </div>
      <div class="col-sm-3">
        <service-professional-info-card-component
          :sPData="serviceProfesional"
        ></service-professional-info-card-component>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchConsumerComponent from '@/components/Search_Consumer_Component'
  import ServiceProfessionalInfoCardComponent from '@/components/Service_Professional_Info_Card_Component'
  import Table3SelectableComponent from '@/components/Table3_Selectable_Component'

  export default {
    components: {
      'search-consumer_component': SearchConsumerComponent,
      'service-professional-info-card-component': ServiceProfessionalInfoCardComponent,
      'table3-selectable_component': Table3SelectableComponent
    },
    name: 'serviceRequest',
    data () {
      return {
        consumers: [
          {
            firstName: 'John',
            lastName: 'Smith',
            state: 'CO'
          },
          {
            firstName: 'Jane',
            lastName: 'Doe',
            state: 'CA'
          },
          {
            firstName: 'Bob',
            lastName: 'Anderson',
            state: 'DE'
          },
          {
            firstName: 'Barb',
            lastName: 'Jones',
            state: 'WA'
          }
        ],
        serviceProfesional: {
          sPName: 'ABC Company',
          sPID: '12345',
          sPPhone: '(555) 555-5555',
          sPLocation: 'Hello, WO',
          sPRatings: '10',
          sPRating: '4.8',
          affiliate: 'Thor',
          numberCalled: '(555) 555-5556',
          callUniqueID: '123123123',
          serverID: 'Infinity'
        }
      }
    }
  }
</script>
