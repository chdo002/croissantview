import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        /// 连接状态
        isSocketConnected: false,
        requestListBarWidth: 310,
        // 网络请求
        requestFilterKeyword: undefined, // 请求过滤词
        allRequests: [], // 所有的请求
        displayRequestArr: [], // 所有过滤的网络请求
        currentRequest: undefined,
        // 日志记录
        logFilterKeyword: undefined, // 请求过滤词
        allLogs: [],
        currentLog: undefined,
    },
    getters: {
        displayRequests: state => {
            //  // 展示全部网络请求
            if (state.requestFilterKeyword === undefined) {
                let arr = state.allRequests;
                state.displayRequestArr = arr;
                return arr;
            } else {
                // 展示过滤的网络请求
                let arr = state.allRequests.filter(function (req) {
                    // request.text 
                    return req;
                });
                state.displayRequestArr = arr;
                return arr;
            }
        },
        displayLogs: state => {
            if (state.logFilterKeyword === undefined) {
                return state.allLogs;
            } else {
                return state.allLogs.filter(function (log) {
                    return log;
                })
            }
        }
    },
    mutations: {
        // 更改socket连接状态
        changeSocketState(state, newValue) {
            state.isSocketConnected = newValue;
        },
        // 更改请求bar宽度
        changeRequestBarWidth(state, newValue) {
            state.requestListBarWidth = newValue;
        },
        // 收到新网络请求
        addRequest(state, newValue) {
            state.allRequests.push({
                text: newValue
            });
        },
        // 当前选中的请求
        changeCurrentRequest(state, newValue) {
            state.currentRequest = newValue;
        },
        // 選中下一個请求
        scrolllRequest(state, keyCode) {
            let length = state.displayRequestArr.length;
            if (state.currentRequest === undefined) {
                if (keyCode == 39 || keyCode == 40) { // 向下
                    state.currentRequest = state.displayRequestArr[0];
                } else if (keyCode == 38 || keyCode == 37) { // 向上
                    state.currentRequest = state.displayRequestArr[length - 1];
                }
                return;
            }
            
            for (let index = 0; index < length; index++) {

                const element = state.displayRequestArr[index];
                let cid = state.currentRequest.text.request.uuid;
                let eid = element.text.request.uuid;
                if (eid === cid) {
                    if (keyCode == 39 || keyCode == 40) { // 向下
                        if (index < length - 1) {
                            state.currentRequest = state.displayRequestArr[index + 1];
                        }
                    } else if (keyCode == 38 || keyCode == 37) { // 向上
                        if (index > 0) {
                            state.currentRequest = state.displayRequestArr[index - 1];
                        }
                    }
                    break;
                }
            }
        },

        /***************************************************************************************/
        // 收到日志
        addLog(state, newValue) {
            state.allLogs.push({
                text: newValue
            });
        }

    }
});

export default store;
