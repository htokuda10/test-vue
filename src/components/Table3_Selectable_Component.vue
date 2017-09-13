<template>
  <div id="table3SelectableComponent" class="row">
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
          </tr>
        </thead>
        <tbody>
        <tr v-for="dataObject in dataArray">
          <td v-for="value in dataObject">{{ value }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'table3SelectableComponent',
    props: ['columnKey1', 'columnKey2', 'columnKey3', 'columnName1', 'columnName2', 'columnName3', 'dataArray',
      'tableClasses', 'tableTitle', 'titleClasses'],
    data () {
      return {}
    }
  }
</script>
