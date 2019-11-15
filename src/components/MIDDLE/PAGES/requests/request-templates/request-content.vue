<template>
  <div>
    <el-tabs @tab-click="handleTabClick" style="padding-left:10px;padding-right:10px">
      <el-tab-pane label="request" name="first">
        <vue-json-pretty
          :data="currentRequest.text.request"
          :highlightMouseoverNode="true"
          @click="handleClick"
        ></vue-json-pretty>
      </el-tab-pane>

      <el-tab-pane label="response" name="second">
        <vue-json-pretty
          :data="currentRequest.text.response"
          :highlightMouseoverNode="true"
          @click="handleClick"
        ></vue-json-pretty>
      </el-tab-pane>

      <el-tab-pane label="error" name="fourth">
        <vue-json-pretty
          :data="currentRequest.text.error"
          :highlightMouseoverNode="true"
          @click="handleClick"
        ></vue-json-pretty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";

export default {
  components: {
    VueJsonPretty
  },
  data() {
    return {
      activeName: "second"
    };
  },
  props: {
    request: Object
  },
  computed: {
    currentRequest: function() {
      let request = this.$store.state.currentRequest;
      return request;
    }
  },
  methods: {
    handleTabClick(tab, event) {
      console.log(tab, event);
    },
    handleClick(param){
      console.log(param + "?????");
    }
  }
};
</script>

<style lang="scss" scoped>
.back {
  // display: flex;
  // flex-direction: row;
  // background-color: aquamarine;
}
li:nth-child(2n + 1) {
  background: #39f;
}
.temp {
  padding-top: 10px;
}
</style>