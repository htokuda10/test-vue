<template>
  <span :class="searchMenuArrowClasses" aria-hidden="true" v-on:click="clickFunctions"></span>
</template>

<script>
  export default {
    methods: {
      /**
       * clickFunction will trigger on click of the span icon. ClickFunction does not need to change the value of the
       * contentVisible variable, because it is calling the parent container to update the contentVisible value. This
       * component has a watcher on the isContentVisible variable, and will render the span based on the contentVisible
       * value of the parent component.
       */
      clickFunctions: function () {
        this.parentToggleFunction()
        this.renderArrow()
      },
      parentUpdatedIsContentVisible: function () {
        this.contentVisible = !this.contentVisible
        this.renderArrow()
      },
      /**
       * renderArrow will render the direcion of the arrow based on the show component value. If the show component
       * value is true, display a down arrow to indicate that clicking the icon will show the component.
       */
      renderArrow: function () {
        this.searchMenuArrowClasses = (this.contentVisible && this.contentVisible === true)
            ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down'
      }
    },
    name: 'upDownToggleComponent',
    props: ['isContentVisible', 'parentToggleFunction'],
    watch: {
      /* Watch the isContentVisible variable for changes made by the parent component. If a change is made, call the
       * parentUpdatedIsContentVisible function to handle the change. */
      'isContentVisible': function () {
        this.parentUpdatedIsContentVisible()
      }
    },
    data () {
      return {
        contentVisible: (this.isContentVisible && this.isContentVisible === true),
        searchMenuArrowClasses:
          (this.isContentVisible && this.isContentVisible === true)
            ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down'
      }
    }
  }
</script>
