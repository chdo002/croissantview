<template>
    <div class="back shadow">
        <div v-for="(item) in list">
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

    import { routes } from '@/router'
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
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: #fff;
        text-decoration: none;
        text-align: center;
    }
    .active{
        background-color: #1E3039 !important;
        color: #41B983;
    }
    .item:hover {
        background-color: #1E3039;
    }
    .shadow {
        box-shadow:$bar-shadow;
        z-index: 20;
    }
</style>