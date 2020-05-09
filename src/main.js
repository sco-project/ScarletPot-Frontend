import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './router.js';
// import AmapVue from '@amap/amap-vue'
// import ReconnectingWebSocket from 'reconnecting-websocket';
import echarts from 'echarts'
// import VueX from 'vuex'
// Vue.use(AmapVue);
// Vue.use(ReconnectingWebSocket);
Vue.use(dataV);
Vue.use(router);
// Vue.use(VueX);
Vue.prototype.$echarts = echarts;
// websocket 断线重连
// Vue.prototype.ws = new ReconnectingWebSocket('ws://localhost:9000/ws');
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
