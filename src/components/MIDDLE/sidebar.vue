<template>
    <div class="back">
<!--        <router-link to="/foo" class="item active">Go to Foo</router-link>-->
<!--        <router-link to="/bar" class="item">Go to Bar</router-link>-->
        <div v-for="(item, index) in list">
            <router-link
                    :to="item.path"
                    class="memulink"
            >
                <div class="item">
                    {{item.name}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {routes} from '@/router'
    export default {
        data (){
            return {
                list: routes
            }
        }
    }
</script>

<style lang="scss" scoped>
    .back {
        background-color: $side-back-color;
        display: flex;
        flex-direction: column;
    }
    .item {
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        color: #333;
        background-color: #fff;
        text-decoration: none;
        text-align: center;
    }
    .memulink {
        text-decoration: none;
    }
    .item:hover{
        background-color:#ccc;
        color: #333333;
    }
    .active{
        background-color: #ccc;
        color: red;
    }

</style>