export const fruitMixin = {
  // Replicated per component (i.e. it is not shared)
  data () {
    return {
      fruits: ['Apple', 'Banana', 'Orange', 'Melon'],
      filterText: '',
    };
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
  created () {
    console.log('Created');
  }
};
