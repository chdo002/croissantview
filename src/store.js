import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 网络请求
        requestFilterKeyword:undefined, // 请求过滤词
        allRequests:[], // 所有的请求
        currentRequest:undefined,
        /// 连接状态
        isSocketConnected:false,
    },
    getters: {
        displayRequests: state => {
            if (state.requestFilterKeyword === undefined) {
                return state.allRequests;
            } else {
                return state.allRequests.filter(function () {
                    // request.text
                })
            }
        }
    },
    mutations: {
        // 收到新网络请求
        addRequest (state, newValue) {
            state.allRequests.push({
                text:newValue
            });
        },
        // 当前选中的请求
        changeCurrentRequest (state, newValue) {
            state.currentRequest = newValue;
        },
        // 过滤
        filterRequestWithKeyWord (state, keyWord) {
            state.requestFilterKeyword = keyWord;
        },

        // 更改socket连接状态 
        changeSocketState(state, newValue) {
            state.isSocketConnected = newValue;
        }
    }
});

export default store;
