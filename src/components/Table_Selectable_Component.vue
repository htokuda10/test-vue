<template>
  <table>
    <thead>

      <!-- TODO TODO TODO - Remove this when finished. -->
      <td>{{ consumers }}</td>

      <td>
        First Name
      </td>
      <td>
        Last Name
      </td>
      <td>
        State
      </td>
    </thead>
    <tbody>
      <tr v-for="consumer in consumers">
        <td></td>
        <td>
          {{ consumer.firstName }}
        </td>
        <td>
          {{ consumer.lastName }}
        </td>
        <td>
          {{ consumer.state }}
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
  export default {
    props: ['consumers'],
    data () {
      return {}
    }
  }
</script>
