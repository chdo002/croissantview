<template>
    <div class="backg">
        <sidebar id="left"/>
        <network id="right"/>
    </div>
</template>

<script>
import sidebar from './sidebar.vue'
import network from './content/network.vue'
export default {
    name:'mainview',
    components:{
        sidebar,
        network,
    }
}
</script>

<style scoped>
.backg{
    background-color: rgb(97, 131, 165);
    display: flex;
    flex-direction: row;
}
#left {
    width: 120px;
    height: 100%;
}
#right {
    flex: 1;
}
</style>