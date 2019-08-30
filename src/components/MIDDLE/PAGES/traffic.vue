<template id="back">
    <div>
        <div class="list-bar">

        </div>
        <div class="content-area">

        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-bar {
        background-color: darkgray;
        width: 200px;
        height: 100%;
        box-shadow: $bar-shadow;
        z-index: 12;
    }
    .content-area {
        background-color: white;
        flex: 1;
    }
</style>