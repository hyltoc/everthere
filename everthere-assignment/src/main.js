import Vue from 'vue'
import App from './App.vue'
import { makeServer } from "./api/server"
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ProgressBar from 'primevue/progressbar'

Vue.config.productionTip = false

Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ProgressBar', ProgressBar);

makeServer()
new Vue({
  render: h => h(App),
}).$mount('#app')

