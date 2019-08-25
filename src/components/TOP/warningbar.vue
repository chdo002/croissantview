<template>
    <div class="back" style="height:60px;">
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
}
</style>