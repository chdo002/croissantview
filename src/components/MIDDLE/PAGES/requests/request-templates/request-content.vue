<template>
    <div class="back">
        {{currentRequest}}
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
</style>