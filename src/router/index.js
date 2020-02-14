import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/login/Login'
import RouteView from '@/layouts/RouteView'
import Dashboard from '@/pages/dashboard/Index'
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