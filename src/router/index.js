import Vue from 'vue';
import Router from 'vue-router';
import Detail from '../pages/Detail.vue';
import Home from '../pages/Homepage.vue';
import notFound from '../pages/404.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: "/news/detail/:id",
            component: Detail,
            props: true,
        },
        {
            path: "*",
            name: "notFound",
            component: notFound,
        },
    ],
})
