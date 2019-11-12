<template>
  <div class="back">

    <!-- {{currentRequest}} -->
    <!-- <json-view :data="currentRequest" /> -->

    <vue-json-pretty :data="currentRequest.text" :highlightMouseoverNode="true" @click="handleClick"></vue-json-pretty>

  </div>
</template>

<script>

import VueJsonPretty from "vue-json-pretty";

export default {

  components: {
    VueJsonPretty
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
    handleClick: function(param) {
      console.log(param);
    }
  },
  watch: {
    request:function(){
      console.log("???????");
    }
  },
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