<template>
  <div>
    <h2>Mixin with Computed Properties</h2>
    <input type="text" v-model="filterText">
    <hr>
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  import { fruitMixin } from './fruitMixin';

  export default {
    mixins: [fruitMixin],
    created () {
      console.log('Inside List Created Hook'); // The component can override changes introduced by the mixin
    }
  };
</script>

<style>

</style>
