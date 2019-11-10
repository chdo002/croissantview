<template>
  <div class="back">
    <!-- {{currentRequest}} -->
    <!-- <json-view :data="currentRequest" /> -->
    <vue-json-pretty :data="currentRequest" :highlightMouseoverNode="true" @click="handleClick"></vue-json-pretty>
  </div>
</template>

<script>
import jsonView from "vue-json-views";
import VueJsonPretty from "vue-json-pretty";

export default {
  components: {
    jsonView,
    VueJsonPretty
  },
  props: {
    request: Object
  },
  mounted: function() {
    if (this.$store.state.currentRequest !== undefined) {
      // let contentHtml = renderj(this.$store.state.currentRequest);
      // document.getElementById("json-content").appendChild(contentHtml);
    }
  },
  computed: {
    currentRequest: function() {
      let request = this.$store.state.currentRequest;
      return request.text;
    }
  },
  methods: {
    handleClick: function(param) {
      console.log(param);
    }
  }
};
</script>

<style lang="scss" scoped>
.back {
  display: flex;
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