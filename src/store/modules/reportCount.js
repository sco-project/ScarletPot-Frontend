import controller from '../../websocket'

const state = {
    data :{
        reportCount: 0,
        errCount : 0,
        successReport: 0,
        validCount: 0,
        invalidCount: 0,
        dayCount :0,
    }
}

const actions = {
    loadReportCount ({commit}) {
        // return new Promise((r,j) => {
        //     try {
        //         const {data} = controller("reportCount")
        //         commit('storeData',data)
        //         r(data)
        //     } catch (e) {
        //         j(e)
        //     }
        // })
        const data = controller("reportCount");
        commit('storeReportCount',data)
    },
    // setReportCount ({ commit }, count) {
    //     commit('storeReportCount',count)
    // }
}

const mutations = {
    storeReportCount(state, count) {
        state.data = count;
    },
}

export default {
    state,
    actions,
    mutations
}