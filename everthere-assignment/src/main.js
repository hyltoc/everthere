import Vue from 'vue'
import App from './App.vue'
import { makeServer } from "./api/server"

Vue.config.productionTip = false
makeServer()
new Vue({
  render: h => h(App),
}).$mount('#app')
