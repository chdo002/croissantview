<template>
    <div  class="back">

        <div class="host-bar">
            <div class="host-list">
                <Host>

                </Host>
            </div>
            <div class="host-filter">
                <label>asdfsd</label>
                <label style="flex: 1">
                    <input style="flex: 1">
                </label>
            </div>
        </div>

        <div class="content-area">

        </div>

    </div>
</template>

<script>
    import Host from '@/components/MIDDLE/PAGES/host/host'
    export default {
        components:{
            Host
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .back{
        display: flex;
        flex-direction: row;
    }
    .host-bar {
        display: flex;
        flex-direction: column;
        background-color: #2B3E50;
        width: 250px;
        height: 100%;
        box-shadow: $bar-shadow;
        z-index: 12;
    }
    .host-list {
        background-color: bisque;
        flex: 1;
    }
    .host-filter {
        background-color: #41B983;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .content-area {
        background-color: white;
        flex: 1;
    }
</style>