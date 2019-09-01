<template id="back">
    <div>
        <div class="list-bar">
            <HostCompoment>

            </HostCompoment>
        </div>
        <div class="content-area">

        </div>

    </div>
</template>

<script>
    import HostCompoment from '@/components/MIDDLE/PAGES/host/host'
    export default {
        components:{
            HostCompoment
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-bar {
        background-color: #2B3E50;
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