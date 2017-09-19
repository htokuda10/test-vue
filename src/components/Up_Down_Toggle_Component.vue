<template>
  <span
    :class="(this.isContentVisible && this.isContentVisible === true)
      ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down'"
    aria-hidden="true"
    v-on:click="clickFunctions">
  </span>
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
      }
    },
    name: 'upDownToggleComponent',
    props: ['isContentVisible', 'parentToggleFunction'],
    data () {
      return {
      }
    }
  }
</script>
