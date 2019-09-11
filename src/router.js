import Vue from 'vue'
import Router from 'vue-router'

import Requests from '@/components/MIDDLE/PAGES/requests/requst-index'
import Logs from '@/components/MIDDLE/PAGES/logs/log-index'

Vue.use(Router);

export const routes = [
    {
        path: '/netWork',
        component: Requests,
        name:"网络1"
    },
    {
        path: '/log',
        component: Logs,
        name:"日志2"
    }
];

export default new Router({
    routes:routes
})