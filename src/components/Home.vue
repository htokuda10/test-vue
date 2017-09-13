<template>
  <div class="home container">
    <h2>Location and Consumer Details</h2>

    <search-consumer_component :consumers="consumers"></search-consumer_component>
    <div v-if="{ consumers } && { consumers }.length > 0">
      <table-selectable_component :consumers="consumers"></table-selectable_component>
    </div>
  </div>
</template>

<script>
  import SearchConsumerComponent from '@/components/Search_Consumer_Component'
  import TableSelectableComponent from '@/components/Table_Selectable_Component'

  export default {
    components: {
      'search-consumer_component': SearchConsumerComponent,
      'table-selectable_component': TableSelectableComponent
    },
    name: 'home',
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
        ]
      }
    }
  }
</script>
