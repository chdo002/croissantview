<template>
    <div id="back">
        <div class="title-style">
            {{msg}}
        </div>
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
    .back {
        background-color: cyan;
    }
    .title-style {
        background-color: #41B983;
    }
    .title-style:hover {
        background-color: #b95b8a;
    }
</style>