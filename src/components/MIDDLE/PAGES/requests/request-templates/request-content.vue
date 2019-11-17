<template>
  <div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleTabClick"
      style="padding-left:10px;padding-right:10px"
    >
      <el-tab-pane label="request" name="first">
        <HttpView :httpObj="currentRequest.text.request"></HttpView>
      </el-tab-pane>

      <el-tab-pane label="response" name="second">
        <div v-if="currentRequest.text.response !== undefined">
          <HttpView :httpObj="currentRequest.text.response"></HttpView>
        </div>
        <div v-else>空</div>
      </el-tab-pane>

      <el-tab-pane v-if="currentRequest.text.error !== undefined" label="error" name="third">
        <div v-if="currentRequest.text.error !== undefined">
          <vue-json-pretty
            :data="currentRequest.text.error"
            :highlightMouseoverNode="true"
            @click="handleClick"
          ></vue-json-pretty>
        </div>
        <div v-else>空</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import HttpView from "@/components/MIDDLE/PAGES/requests/request-templates/request-view.vue";

export default {
  components: {
    HttpView
  },
  data() {
    return {
      activeName: "first"
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
    handleClick(param) {
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