import Vue from 'vue';
import Vuex from 'vuex'
import report from './modules/reportCount';
import service from './modules/serviceCount';
import list from './modules/list';
import map from './modules/map';
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        report,
        service,
        list,
        map,
    },
    getters
});

export default store
