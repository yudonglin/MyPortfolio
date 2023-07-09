import {createRouter, createWebHistory} from "vue-router";
import NotFound from "../views/PageNotFound.vue";

const routes = [
    /*{
        path: "/",
        name: "Preview",
        component: Preview,
        meta: {
            title: "Preview || Tunis VueJS 3 Personal Portfolio Template",
        },
    },*/
    {
        path: "/",
        name: "HomeDark",
        component: () => import("../views/HomeDark.vue"),
        meta: {
            title: "Yudong Lin",
        },
    },
    {
        path: "/light",
        name: "HomeLight",
        component: () => import("../views/HomeLight.vue"),
        meta: {
            title: "Yudong Lin",
        },
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
        meta: {
            title: "Not Found",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0);
});

export default router;
