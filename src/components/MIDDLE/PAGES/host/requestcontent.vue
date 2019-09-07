<template>

    <div class="back">
        {{msg}}
    </div>

</template>

<script>
    export default {
        props: {
            msg: String
        }
    }
</script>

<style lang="scss" scoped>
    .back{
        display: flex;
        flex-direction: row;
    }
</style>