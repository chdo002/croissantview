<template>
  <div class="back">
    <!-- <div class="temp">
            {{currentRequest.text.request}}
            <br><br>
            {{currentRequest.text.error}}
        </div>
        <div class="temp">
            {{currentRequest.text.response}}
        </div>
        <div class="temp">
            
            
    </div>-->

    <ul>
      <li>12</li>
      <li>13</li>
      <li>14</li>

      <li>
        22
        <ul>
          <li>12</li>
          <li>12</li>
          <li>13</li>
          <li>12</li>
          <li>13</li>
          <li>
            关键点
            <ul v-if="true">
              <li>12</li>
              <li>13</li>
              <li>
                13
                <ul>
                  <li>13</li>
                </ul>
              </li>
              <li>12</li>
              <li>13</li>
            </ul>
          </li>
          <li>结束</li>
          <li>12</li>
          <li>13</li>
        </ul>
      </li>

      <li>14</li>
      <li>14</li>
      <li>14</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    request: Object
  },
  computed: {
    // 计算属性的 getter
    currentRequest: function() {
      return this.$store.state.currentRequest;
    }
  }
};
</script>

<style lang="scss" scoped>
.back {
  //   display: flex;
  //   flex-direction: row;
}
li:nth-child(2n + 1) {
  background: #39f;
}
.temp {
  padding-top: 10px;
}
</style>