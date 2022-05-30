import { createApp } from "vue";
import { createStore } from 'vuex';
import App from './App.vue'
import router from "./router";
import CodeService from "./services/CodeService";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

const store = createStore({
    state: {
        codes: [],
        code: null,
    },
    actions: {
        async list({ commit }) {
            const response = await CodeService.list();
            commit("list", response);    
        },
        async add({ commit }, code) {
            const response = CodeService.add(code);
            commit("add", response);
        },
    },
    getters: {
        codes: state => state.codes,
        code: state => state.livroAtual
    },
    mutations: {
        list: (state, codes) => (state.codes = codes),
        add: (state, code) => state.codes.push(code)
    }
})


app.use(router);
app.use(store);
app.mount('#app')