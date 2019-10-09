<template>
    <div class="back">
        <ul id="list-view" style="overflow: scroll;">
            <li v-for="log in allLogs">
                <LogCell :log-content="log"/>
            </li>
        </ul>
    </div>
</template>

<script>

    import LogCell from '@/components/MIDDLE/PAGES/logs/log-templates/log-cell'

    export default {
        mounted() {
            let div = document.getElementById('list-view');
            div.scrollTop = div.scrollHeight;
        },
        components:{
            LogCell
        },
        computed: {
            allLogs: function () {
                return this.$store.getters.displayLogs;
            }
        },
        watch: {
            allLogs:function (val) {
                this.$nextTick(()=>{
                    let div = document.getElementById('list-view');
                    div.scrollTop = div.scrollHeight;
                });
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
    .back {
        background-color: darkcyan;
        display: flex;
        height: 100%;
        overflow:auto;
        flex-direction: column;
    }

</style>