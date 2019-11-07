<template>
    <div class="back">

        <div class="temp">
            {{currentRequest.text.request}}
        </div>
        <div class="temp">
            {{currentRequest.text.response}}
        </div>
        <div class="temp">
            {{currentRequest.text.error}}
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            request: Object
        },
        computed: {
            // 计算属性的 getter
            currentRequest: function () {
                return this.$store.state.currentRequest;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .back{
        display: flex;
        flex-direction: column;
    }
    .temp {
        padding-top: 10px;
    }
</style>