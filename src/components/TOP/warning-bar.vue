<template>
  <div>
    <!-- v-bind:class="{ backOn:connected, backOff:!connected}" -->
    <div v-if="connected">
      <el-alert title="Connected" type="success" :closable="false"></el-alert>
    </div>
    <div v-else>
      <el-alert title="Disconnected, reload this page." type="error" :closable="false"></el-alert>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  computed: {
    connected: function() {
      return this.$store.state.isSocketConnected;
    }
  }
};
</script>

<style lang="scss" scoped>
.backOn {
  background-color: $top-bar-color-connected;
}
.backOff {
  background-color: $top-bar-color-disconnected;
}
</style>