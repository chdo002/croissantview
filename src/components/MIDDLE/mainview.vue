<template>
    <div class="back">
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
.back{
    background-color: rgb(42, 90, 133);
    display: flex;
    flex-direction: row;
}
#left {
    width: 160px;
    height: 100%;
}
#right {
    flex: 1;
}
</style>