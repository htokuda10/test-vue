<template>
  <div id="radioButtonComponent">
    <div :class="containerClasses">
      <p :class="titleClasses">{{ radioButtonTitle }}:</p>
      <label :for="idValue1">{{ radioButtonLabel1 }}</label>
      <input :id="idValue1" :class="radioButtonClasses" :name="radioButtonName" :value="radioButtonValue1" type="radio">
      <label :for="idValue2">{{ radioButtonLabel2 }}</label>
      <input :id="idValue2" :class="radioButtonClasses" :name="radioButtonName" :value="radioButtonValue2" type="radio">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['containerClasses', 'idValue1', 'idValue2', 'radioButtonClasses', 'radioButtonLabel1', 'radioButtonLabel2',
      'radioButtonName', 'radioButtonTitle', 'radioButtonValue1', 'radioButtonValue2', 'titleClasses'],
    name: 'radioButtonComponent',
    data () {
      return {}
    }
  }
</script>
