import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/login/Login'
import RouteView from '@/layouts/RouteView'
import Dashboard from '@/pages/dashboard/Analysis'
import NotFound from '@/pages/exception/404';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login-page',
            component: Login,
            // invisible: true
        },
        {
            path: '/',
            name: 'home',
            component: RouteView,
            redirect: '/dashboard/analysis',
            icon: 'none',
            // invisible: true,
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: RouteView,
                    icon: 'dashboard',
                    children: [
                        {
                            path: '/dashboard/analysis',
                            name: 'dashboard',
                            component: Dashboard,
                            icon: 'none'
                        }
                    ]
                }
            ]
        },
        {
            path: '/exception',
            name: '异常页',
            icon: 'warning',
            component: RouteView,
            children: [
                {
                    path: '/exception/404',
                    name: '404',
                    icon: 'none',
                    component: NotFound
                }
            ]
        }
    ]   
})