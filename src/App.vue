<template>
  <div id="app">
      <warningbar id="flex-top"/>
      <mainview id="flex-middle"/>
      <bottombar id="flex-bottom"/>
  </div>
</template>

<script>
import warningbar from './components/TOP/warningbar.vue'
import mainview from './components/MIDDLE/mainview.vue'
import bottombar from './components/BOTTOM/bottombar.vue'
export default {
  name: 'app',
  components: {
    warningbar,
    mainview,
    bottombar,
  }
}
</script>

<style>
body,html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
}

#flex-top {
  width: 100%;
  height: 50px;
}

#flex-middle {
  width: 100%;
  flex: 1;
}

#flex-bottom {
  width: 100%;
  height: 40px;
}
</style>
