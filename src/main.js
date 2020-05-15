import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './router.js';
import store from './store/store';
import echarts from 'echarts'
import controller from "@/websocket";
// import ReconnectingWebSocket from "reconnecting-websocket";

Vue.use(dataV);
Vue.use(router);

Vue.prototype.$echarts = echarts;
Vue.prototype.controller = controller
Vue.config.productionTip = false;

//

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
