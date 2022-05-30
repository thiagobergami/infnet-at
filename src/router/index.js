import { createRouter, createWebHistory } from "vue-router";
import AdicionarCode from "../components/AdicionarCode.vue";
import ListarCode from "../components/ListarCode.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/codes",
            name: "codes",
            component: () => ListarCode
        },
        {
            path: "/add",
            name: "add",
            component: () => AdicionarCode,
          },
    ]
});

export default router;
