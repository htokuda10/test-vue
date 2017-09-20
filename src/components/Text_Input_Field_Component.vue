<template>
  <div :class="containerClasses">
    <label :for="idValue" :class="titleClasses">{{ textInputTitle }}:</label>
    <input :id="idValue" :class="inputClasses" :placeholder="placeholderValue" type="text" v-on:keyup.enter="onEnter"
           v-on:keyup="onKeyUp">
  </div>
</template>

<script>
  export default {
    methods: {
      onEnter () {
        // Emit a custom keyup, enter specific, event that the parent component can listen for. 'enter' is the event
        // key in this case.
        this.$emit('enter')
      },
      onKeyUp (event) {
        let emitValue = (event && event.target && event.target.value) ? event.target.value : ''
        // Emit a custom keyup event that the parent component can listen for. 'keyup' is the event key in this case.
        this.$emit('keyup', emitValue)
      }
    },
    name: 'textInputFieldComponent',
    props: ['containerClasses', 'idValue', 'inputBindValue', 'inputClasses', 'placeholderValue', 'textInputTitle',
      'titleClasses'],
    data () {
      return {
        bindValue: this.inputBindValue
      }
    }
  }
</script>
