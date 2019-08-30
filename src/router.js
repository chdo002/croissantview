import Vue from 'vue'
import Router from 'vue-router'

import NetWork from '@/components/MIDDLE/PAGES/traffic'
import LogWork from '@/components/MIDDLE/PAGES/logview'

Vue.use(Router);

export const routes = [
    {
        path: '/netWork',
        component: NetWork,
        name:"网络"
    },
    {
        path: '/log',
        component: LogWork,
        name:"日志"
    }
];

export default new Router({
    routes:routes
})