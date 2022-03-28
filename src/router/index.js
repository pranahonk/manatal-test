import Vue from 'vue';
import Router from 'vue-router';
import Detail from '../pages/Detail';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            props(route) {
                const matched = route.matched;
                /*
                let header = null;
                let footer = null;
                */
                if (matched.length > 1) {
                    /*
                    console.log(matched[1]);
                    if ('header' in matched[1].meta) {
                      header = matched[1].meta.header;
                    }
                    if ('footer' in matched[1].meta) {
                      footer = matched[1].meta.footer;
                    }
                    */
                    return matched[1].meta;
                }
                return {};
            },
            children: [
                {
                    path: 'news/detail/:id',
                    name: 'detail',
                    component: Detail,
                },
            ],
        },
    ],
})
