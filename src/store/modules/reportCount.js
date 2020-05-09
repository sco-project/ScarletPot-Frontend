import controller from '../controller'

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
        return new Promise((r,j) => {
            try {
                const {data} = controller("reportCount")
                commit('storeData',data)
                r(data)
            } catch (e) {
                j(e)
            }
        })
    },
    setReportCount ({ commit }, count) {
        commit('storeData',count)
    }
}

const mutations = {
    storeData(state, count) {
        state.data = count
    },
}

export default {
    state,
    actions,
    mutations
}