<template>
    <div class="backg">
<!--        左侧菜单栏-->
        <SideBar class="left-content"/>
<!--        右侧内容-->
        <router-view class="right-content"></router-view>
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
    width: 100%;
    height: 100%;
}
.left-content {
    width: 120px;
    height: 100%;
}
.right-content {
    flex: 1;
    height: 100%;
}
</style>