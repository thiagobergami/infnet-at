import CodeService from "../services/CodeService";

const state = {
    codes: []
}

const get = {
    codes: state => state.codes
}
const actions = {
    async listar({ commit }) {
        const response = await CodeService.list();

        commit("setCode", response.data);    
    }
};

export default {
    get,
    actions,
    state
}