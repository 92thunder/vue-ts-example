import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

new Vue({
  components: { App },
  template: '<App/>',
  store
}).$mount('#app')
