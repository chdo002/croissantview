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
.back {
    background-color: $top-bar-color;
    height:60px;
}
</style>