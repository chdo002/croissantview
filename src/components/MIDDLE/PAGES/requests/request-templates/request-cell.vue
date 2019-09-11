<template>
    <div id="back">
        <div class="title-style">
            <details>
                <summary>
                    标题
                </summary>
                <div @click="clickRequest(request)">
                    {{request.text}}
                </div>
            </details>
        </div>
    </div>
</template>

<script>

    export default {

        props: {
            request: Object
        },
        methods:{
            clickRequest: function (request) {
                this.$store.commit('changeCurrentRequest',request);
            }
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
</style>