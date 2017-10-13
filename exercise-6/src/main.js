import Vue from 'vue'
import App from './App.vue'
import Header from './AppHeader.vue'
import Footer from './AppFooter.vue'
import Server from './AppServer.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-server', Server);

new Vue({
    el: '#app',
    render: h => h(App)
});
