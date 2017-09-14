<template>
  <span :class="searchMenuArrowClasses" aria-hidden="true" v-on:click="clickFunctions"></span>
</template>

<script>
  export default {
    methods: {
      clickFunctions: function () {
        this.showComponent = !this.showComponent
        this.clickFunction()
        this.renderArrow()
      },
      /**
       * renderArrow will render the direcion of the arrow based on the show component value. If the show component
       * value is true, display a down arrow to indicate that clicking the icon will show the component.
       */
      renderArrow: function () {
        this.searchMenuArrowClasses = (this.showComponent && this.showComponent === true)
            ? 'glyphicon glyphicon-menu-down' : 'glyphicon glyphicon-menu-up'
      }
    },
    name: 'upDownToggleComponent',
    props: ['initialVisible', 'clickFunction'],
    data () {
      return {
        showComponent: (!this.initialVisible || this.initialVisible === false),
        searchMenuArrowClasses:
          (!this.initialVisible || this.initialVisible === false)
            ? 'glyphicon glyphicon-menu-down' : 'glyphicon glyphicon-menu-up'
      }
    }
  }
</script>
