<template>
    <div class="back" style="height:60px;">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'warningbar',
    props: {
        msg: String
    }
}
</script>

<style scoped>
.back {
    background-color: rgb(194, 221, 107);
}
</style>