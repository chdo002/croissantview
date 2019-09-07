<template>
    <div  class="back">
<!--左侧网络列表-->
        <div class="left-bar">
<!--            列表-->
            <div class="host-list">
                <Host v-for="todo in allRequests" :msg="todo.text" @click.native="clickRequest(todo)"/>
            </div>
<!--            底部过滤条-->
            <div class="host-filter">
                <input class="filter-style" placeholder="Filter">
            </div>
        </div>

<!--        右侧网络内容-->
        <div class="content-area">
            <Request :msg="currentRequest"/>
        </div>

    </div>
</template>

<script>

    import Host from '@/components/MIDDLE/PAGES/host/hostcell'
    import Request from '@/components/MIDDLE/PAGES/host/requestcontent'

    export default {
        components:{
            Host,
            Request
        },
        data(){
            return {
                currentRequest: undefined
            }
        },
        computed: {
            allRequests: function () {
                return this.$store.state.requests;
            } 
        },
        methods:{
            clickRequest: function (request) {
                // alert(request.text);
                this.currentRequest = request;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .back{
        display: flex;
        flex-direction: row;
    }
    /*左侧区域*/
    .left-bar {
        display: flex;
        flex-direction: column;
        background-color: #2B3E50;
        width: 250px;
        height: 100%;
        box-shadow: $bar-shadow;
        z-index: 12;
    }
    .host-list { /* 域名列表 */
        /*flex: 1;*/
        height: calc(100% - 40px);
        overflow:auto;
        display: flex;
        flex-direction: column;
    }
    .host-filter { /* 过滤条 */
        background-color: #41B983;
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .filter-style {
            margin: 5px 5px 5px 5px;
            height: 25px;
            flex: 1;
        }
    }
    /* 右侧内容 */
    .content-area {
        background-color: white;
        flex: 1;
    }
</style>