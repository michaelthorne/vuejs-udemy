import Vue from 'vue';
import App from './App.vue';

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created () {
    console.log('Global Mixin - Created Hook'); // Called 3 times: new Vue instance; plus App.vue and List.vue components
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
