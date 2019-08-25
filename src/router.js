
import Vue from 'vue'
import Router from 'vue-router'

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

Vue.use(Router);
