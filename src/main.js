import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './router.js';

import AmapVue from '@amap/amap-vue'
AmapVue.config.version = '1.4.15' // 默认1.4.15
AmapVue.config.key = '477283ba61ba3df425fa4e96969a8be5';
AmapVue.config.plugins = [
  'AMap.ToolBar',
  // 在此配置需要预加载的插件，如果不配置，则会在调用的时候再自动加载
]
Vue.use(AmapVue);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(router);

Vue.config.productionTip = false;
Vue.use(dataV);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
