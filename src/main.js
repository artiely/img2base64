import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify';
import './quasar'
import Copy from 'v-copy'

Vue.use(Copy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
