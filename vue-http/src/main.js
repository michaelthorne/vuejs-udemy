import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-http-78bb4.firebaseio.com/data.json'
// Vue.http.options.headers = ''
Vue.http.interceptors.push((request, next) => {
  console.log(request)

  if (request.method === 'POST') {
    // PUT overwrites the old data on Firebase.
    // request.method = 'PUT'
  }
  next(response => {

  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
