<template>
    <div class="back">
        {{logContent}}
    </div>
</template>

<script>
    export default {
        props: {
            logContent:Object
        }
    }
</script>

<style lang="scss" scoped>
    .back{
        background-color: #41B983;
    }
</style>