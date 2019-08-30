<template>
    <div class="backg">
        <SideBar id="left"/>
        <router-view id="right"></router-view>
    </div>
</template>

<script>
import SideBar from '@/components/MIDDLE/sidebar.vue'
// import Content from '@/components/MIDDLE/content.vue'
export default {
    components:{
        SideBar,
    }
}
</script>

<style lang="scss" scoped>
.backg{
    background-color: $main-view-color;
    display: flex;
    flex-direction: row;
}
#left {
    width: 120px;
    height: 100%;
}
#right {
    flex: 1;
    display: flex;
}
</style>