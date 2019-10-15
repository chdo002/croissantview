<template>
    <div class="back">
        <div id="box">
            <div class="top">顶部导航</div>
            <div id="left"> 左边的div
                <svg width="100%" id="controllerSvg" ></svg>
            </div>
            <div id="resize"></div>
            <div id="right" style="border-top: 1px solid #b5b9a9; ">右边的div
                      <svg width="100%" height="auto" id="serverSvg" ></svg>
            </div>
            <p></p>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            request: Object
        },
        computed: {
            // 计算属性的 getter
            currentRequest: function () {
                return this.$store.state.currentRequest;
            }
        },
        methods: {
            dragControllerDiv: function () {
                let resize = document.getElementById('resize')
                let left = document.getElementById('left')
                let right = document.getElementById('right')
                let box = document.getElementById('box')

                resize.onmousedown = function (e) {
                    let startX = e.clientX
                    resize.left = resize.offsetLeft
                    document.onmousemove = function (e) {
                        let endX = e.clientX;
                        let moveLen = resize.left + (endX - startX);
                        let maxT = box.clientWidth - resize.offsetWidth
                        if (moveLen < 150) moveLen = 360;
                        if (moveLen > maxT - 800) moveLen = maxT - 800;
                        resize.style.left = moveLen;
                        left.style.width = moveLen + 'px';
                        right.style.width = (box.clientWidth - moveLen - 5) + 'px'
                    }
                    document.onmouseup = function () {
                        document.onmousemove = null
                        document.onmouseup = null
                        resize.releaseCapture && resize.releaseCapture()
                    };
                    resize.setCapture && resize.setCapture();
                    return false
                }
            }
        },
        mounted () {
            this.dragControllerDiv()
        }
    }
</script>

<style lang="scss" scoped>
    #box{
        width:100%;
        height:400px;
        position: relative;
        overflow:hidden;
    }
    .top {
        width: 100%;
        height: 80px;
        background: #ffe0c6;
    }
    #left{
        width:calc(30% - 5px);
        height: 100%;
        float:left;
        overflow: auto;
        background: pink;
    }

    #resize{
        position: relative;
        width:5px;
        height:100%;
        cursor: w-resize;
        float:left;
    }

    #right{
        width:70%;
        height:100%;
        float:left;
        overflow: hidden;
        background: #ffc5c1;
    }
    .back{
        display: flex;
        flex-direction: column;
    }
</style>