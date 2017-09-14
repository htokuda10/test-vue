<template>
  <div class="row">
    <div class="col-sm-12">
      <h4 :class="titleClasses">{{ tableTitle }}
        <up-down-toggle-component v-if="tabCollapsible === true"
          :isContentVisible="contentVisible"
          :parentToggleFunction="upDownToggleComponentClickedFunction"
        ></up-down-toggle-component>
      </h4>
      <div class="row" v-show="contentVisible">
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
          <tr v-for="dataObject in dataArray" v-on:click="rowClickedFunction(dataObject)">
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
  </div>
</template>

<script>
  import UpDownToggleComponent from './Up_Down_Toggle_Component.vue'

  export default {
    components: {UpDownToggleComponent},
    methods: {
      upDownToggleComponentClickedFunction: function () {
        this.setContentVisible()
      },
      rowClickedFunction: function (dataObject) {
        this.setContentVisible()
        this.clickFunction(dataObject)
      },
      setContentVisible: function () {
        this.contentVisible = !this.contentVisible
      }
    },
    name: 'table5SelectableComponent',
    props: ['clickFunction', 'columnKey1', 'columnKey2', 'columnKey3', 'columnKey4', 'columnKey5',
      'columnName1', 'columnName2', 'columnName3', 'columnName4', 'columnName5', 'dataArray', 'isContentVisible',
      'isTabCollapsible', 'tableClasses', 'tableTitle', 'titleClasses'],
    watcher: {
    },
    data () {
      return {
        contentVisible: (this.isContentVisible === true),
        tabCollapsible: (this.isTabCollapsible === true)
      }
    }
  }
</script>
