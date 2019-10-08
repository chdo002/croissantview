
import store from '@/store'

const socket = new WebSocket('ws://localhost:8080/');

socket.onopen = function() {
    // eslint-disable-next-line no-console
    console.log("Connection open ...");
    store.commit('changeSocketState',true);
};

socket.onmessage = function(evt) {
    // eslint-disable-next-line no-console
    console.log( "Received Message: " + evt.data);
    store.commit('addRequest','content.target.value');
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