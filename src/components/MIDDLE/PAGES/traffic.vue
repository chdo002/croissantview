<template>
    <div  class="back">
<!--左侧网络列表-->
        <div class="host-bar">
<!--            列表-->
            <div class="host-list">
                <ol>
                    <li v-for="todo in todos">
                        {{ todo.text }}
                    </li>
                </ol>
                <button v-on:click="reverseMessage"></button>
            </div>
<!--            底部过滤条-->
            <div class="host-filter">
                <input class="filter-style" placeholder="Filter">
            </div>
        </div>

<!--        右侧网络内容-->
        <div class="content-area">

        </div>

    </div>
</template>

<script>
    import Host from '@/components/MIDDLE/PAGES/host/host'
    export default {
        components:{
            Host
        },
        data(){
            return {
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ]
            }
        },
        methods:{
            reverseMessage: function () {
                for (var i = 0; i < 20; i++){
                    this.todos.push({
                        text:"aaaa"
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    html,body{width: 100%;height: 100%;overflow: hidden;}
    .back{
        display: flex;
        flex-direction: row;
    }
    .host-bar {
        display: flex;
        flex-direction: column;
        background-color: #2B3E50;
        width: 250px;
        height: 100%;
        box-shadow: $bar-shadow;
        z-index: 12;
    }
    .host-list {
        background-color: bisque;
        /*height: calc(100% - 40px);*/
        flex: 1;
        /*overflow-y: auto;*/
        display: flex;
        flex-direction: column;
        /*overflow: hidden;*/
    }
    .host-filter {
        background-color: #41B983;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .content-area {
        background-color: white;
        flex: 1;
    }
    .filter-style {
        margin: 5px 5px 5px 5px;
        height: 25px;
        flex: 1;
    }
</style>