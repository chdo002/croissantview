import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count:1,
        requests:[
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' },
            { text: '整个牛项目2' },
            { text: '整个牛项目3' }
        ]
    },
    mutations: {

    }
});

export default store;
