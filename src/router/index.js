import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/login/Login';
import RouteView from '@/layouts/RouteView';
import Dashboard from '@/pages/dashboard/index';
import Listview from '@/pages/listview/index';
import Formview from '@/pages/formview/index';
import FormDemo1 from '@/pages/formview/demo1';
import FormDemo2 from '@/pages/formview/demo2';
import NotFound from '@/pages/exception/404';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login-page',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: RouteView,
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard-page',
                    component: Dashboard
                },
                {
                    path: '/listview',
                    name: 'listview-page',
                    component: Listview
                },
                {
                    path: '/formview',
                    name: 'formview-page',
                    component: Formview,
                    redirect: '/formview/demo1',
                    children: [
                        {
                            path: 'demo1',
                            name: 'formview-demo1-page',
                            component: FormDemo1
                        },
                        {
                            path: 'demo2',
                            name: 'formview-demo2-page',
                            component: FormDemo2
                        }
                    ]
                }
            ]
        },
        // exceptions pages
        {
            path: '/404',
            name: 'notfound-apge',
            component: NotFound
        },
        // when none of the above matches:
        {
            path: "*",
            component: NotFound
        }
    ]   
})