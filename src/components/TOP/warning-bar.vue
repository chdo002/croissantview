<template>
    <div 
        style="height:35px;"
        v-bind:class="{ backOn:connected, backOff:!connected}"
    > 
        <div v-if="connected">
            Connected
        </div>
        <div v-else>
            Disconnected, reload this page.
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    },
    computed:{
        connected: function() {
            return this.$store.state.isSocketConnected;
        }
    }
}
</script>

<style lang="scss" scoped>
.backOn {
    background-color: $top-bar-color-connected;
}
.backOff {
    background-color: $top-bar-color-disconnected;
}
</style>