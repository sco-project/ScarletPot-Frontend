import Vue from 'vue';
import Vuex from 'vuex'
// import ReconnectingWebSocket from 'reconnecting-websocket';

// import report from './modules/reportCount';
// import service from './modules/serviceCount';
// import list from './modules/list';
// import map from './modules/map';
// import getters from './getters'
import controller from '../websocket'

Vue.use(Vuex);

// const store = new Vuex.Store({
//     modules: {
//         report,
//         service,
//         list,
//         map,
//     },
//     getters
// });

export default new Vuex.Store({
    state:{
        data:0,
        service:0,
        status:0,
    },

    getters :{
      getReportCount(state) {
          return state.data
      },
        getServicesCount(state) {
            return state.service
        },
        getStatus(state) {
          return state.status
        }
    },

    mutations :{
        setReportCount(state, count) {
            state.data = count;
        },
        setServicesCount(state, count) {
            state.service = count;
        },
        setStatus(state,status) {
            state.status = status
        }
    },

    actions: {
        storeReportCount(context) {
            controller.ws.onmessage = (evt) => {
               var resData = JSON.parse(evt.data);
               console.log(resData.data.reportCount)
                context.commit('setReportCount',resData.data)
                context.commit('setServicesCount',resData.service)
                context.commit('setStatus',resData.status)
            };

        }
    }

})


// export default store
