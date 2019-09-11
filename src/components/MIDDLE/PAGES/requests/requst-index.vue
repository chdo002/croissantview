<template>
    <div  class="back">
<!--左侧网络列表-->
        <div class="left-bar">
            <div style="display: flex;flex-direction: row;background-color: white">
                <label style="width: 50%; text-align: center;">Structure</label>
                <label style="width: 50%; text-align: center;">Sequence</label>
            </div>
<!--            列表-->
            <ul class="host-list">
                <li v-for="todo in allRequests" >
                    <host :request="todo"/>
                </li>
            </ul>
<!--            底部过滤条-->
            <div class="host-filter">
                <input class="filter-style" placeholder="Filter" @input="onInput">
            </div>
        </div>

<!--        右侧网络内容-->
        <div class="content-area">
            <Request :request="currentRequest"/>
        </div>

    </div>
</template>

<script>

    import Host from '@/components/MIDDLE/PAGES/requests/request-templates/request-cell'
    import Request from '@/components/MIDDLE/PAGES/requests/request-templates/request-content'

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
                return this.$store.getters.displayRequests;
            }
        },
        methods:{
            clickRequest: function (request) {
                this.currentRequest = request;
            },
            onInput: function (content) {
                this.$store.commit('addRequest',content.target.value);
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
        background-color: rgba(221, 168, 137, 0.51);
        width: 250px;
        height: 100%;
        box-shadow: $bar-shadow;
        z-index: 12;
    }
    .host-list { /* 域名列表 */
        /*flex: 1;*/
        margin: 0 0 0 0;
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
    ul {
        padding: 5px 5px 5px 5px;
        list-style: none;
    }
</style>