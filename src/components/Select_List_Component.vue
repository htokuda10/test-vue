<template>
  <div id="selectListComponent">
    <div :class="containerClasses">
      <p :class="titleClasses">{{ selectListTitle }}:</p>
      <select :id="idValue">
        <option v-for="(value, key) in selectData" :value=key>{{ value }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'selectListComponent',
    props: ['containerClasses', 'idValue', 'selectData', 'selectListTitle', 'titleClasses'],
    data () {
      return {}
    }
  }
</script>
