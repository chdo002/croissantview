<template>
  <div id="app">
      <WarningBar id="flex-top"/>
      <MainView id="flex-middle"/>
      <BottomBar id="flex-bottom"/>
  </div>
</template>

<script>
import WarningBar from '../components/TOP/warningbar.vue'
import MainView from '../components/MIDDLE/index.vue'
import BottomBar from '../components/BOTTOM/bottombar.vue'

export default {
  components: {
      WarningBar,
      MainView,
      BottomBar,
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
  display: flex;
  flex-direction: column;
}

#flex-top {
  width: 100%;
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
