<template>
  <div id="table5SelectableComponent" class="row">
    <div class="col-sm-12">
      <p :class="titleClasses">{{ tableTitle }}:</p>
      <table :class="tableClasses">
        <thead>
          <tr>
            <th>
              {{ columnName1 }}
            </th>
            <th>
              {{ columnName2 }}
            </th>
            <th>
              {{ columnName3 }}
            </th>
            <th>
              {{ columnName4 }}
            </th>
            <th>
              {{ columnName5 }}
            </th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="dataObject in dataArray">
          <td>{{ dataObject[columnKey1] }}</td>
          <td>{{ dataObject[columnKey2] }}</td>
          <td>{{ dataObject[columnKey3] }}</td>
          <td>{{ dataObject[columnKey4] }}</td>
          <td>{{ dataObject[columnKey5] }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'table5SelectableComponent',
    props: ['columnKey1', 'columnKey2', 'columnKey3', 'columnKey4', 'columnKey5',
      'columnName1', 'columnName2', 'columnName3', 'columnName4', 'columnName5', 'dataArray', 'tableClasses',
      'tableTitle', 'titleClasses'],
    data () {
      return {
      }
    }
  }
</script>
