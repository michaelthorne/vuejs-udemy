<template>
  <div>
    <h2>Filters with Computed Properties</h2>
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
  };
</script>

<style>

</style>
