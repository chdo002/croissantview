
import store from '@/store'

const socket = new WebSocket('ws://localhost:8980/');

socket.onopen = function() {
    // eslint-disable-next-line no-console
    console.log("Connection open ...");
    store.commit('changeSocketState',true);
};

socket.onmessage = function(evt) {
    // eslint-disable-next-line no-console
    let data = evt.data;
    // console.log( "Received Message: " + data);
    let obj = JSON.parse(data);
    if (obj.type === 0) { // 网络请求
        store.commit('addRequest',obj.content);
    } else if (obj.type === 1) { // 日志
        store.commit('addLog',obj.content);
    }
};

socket.onclose = function() {
    // eslint-disable-next-line no-console
    console.log("Connection closed.");
    store.commit('changeSocketState',false);
};

socket.onerror = function() {
    // eslint-disable-next-line no-console
    console.log("Connection error.");
    store.commit('changeSocketState',false);
};

export default socket;