<template>
  <div id="buttonComponent">
    <div :class="containerClasses">
      <button :id="idValue" :class="buttonClasses" :value="buttonValue" type="button"
              v-on:click="clickFunction">{{ buttonTitle }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'buttonComponent',
    props: ['buttonClasses', 'buttonTitle', 'buttonValue', 'clickFunction', 'containerClasses', 'idValue'],
    data () {
      return {}
    }
  }
</script>
