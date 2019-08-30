<template>
    <div class="back shadow">
        <div v-for="(item, index) in list">
            <router-link
                    :to="item.path"
                    class="item"
                    tag="div"
                    active-class="active"
            >
                {{item.name}}
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
        background-color: #fff;
        color: #333;
        text-decoration: none;
        text-align: center;
    }
    .active{
        background-color: rosybrown;
        color: red;
    }
    .shadow {
        box-shadow:$bar-shadow;
        z-index: 20;
    }
</style>