import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        /// 连接状态
        isSocketConnected:false,
        requestListBarWidth:Number,
        // 网络请求
        requestFilterKeyword:undefined, // 请求过滤词
        allRequests:[], // 所有的请求
        currentRequest:undefined,
        // 日志记录
        logFilterKeyword:undefined, // 请求过滤词
        allLogs:[],
        currentLog:undefined,
    },
    getters: {
        displayRequests: state => {
            // 展示全部网络请求
            if (state.requestFilterKeyword === undefined) {
                return state.allRequests;
            } else {
                // 展示过滤的网络请求
                return state.allRequests.filter(function () {
                    // request.text
                })
            }
        },
        displayLogs:state => {
            if (state.logFilterKeyword === undefined) {
                return state.allLogs;
            } else {
                return state.allLogs.filter(function (log) {

                })
            }
        }
    },
    mutations: {
        // 更改socket连接状态
        changeSocketState(state, newValue) {
            state.isSocketConnected = newValue;
        },
        changeRequestBarWidth(state, newValue) {
            state.requestListBarWidth = newValue;
        },
        // 收到新网络请求
        addRequest (state, newValue) {
            state.allRequests.push({
                text:newValue
            });
        },

        changeCurrentRequest (state, newValue) { // 当前选中的请求
            state.currentRequest = newValue;
        },

        filterRequestWithKeyWord (state, keyWord) {// 过滤请求
            state.requestFilterKeyword = keyWord;
        },

        // 收到日志
        addLog (state, newValue) {
            state.allLogs.push({
                text:newValue
            });
        }

    }
});

export default store;
