<template>
  <div :class="containerClasses">
    <p :class="titleClasses">{{ textInputTitle }}:</p>
    <input :id="idValue" :class="inputClasses" :placeholder="placeholderValue" type="text">
  </div>
</template>

<script>
  export default {
    props: ['containerClasses', 'idValue', 'inputClasses', 'placeholderValue', 'textInputTitle', 'titleClasses'],
    name: 'inputTextFieldComponent',
    data () {
      return {}
    }
  }
</script>
