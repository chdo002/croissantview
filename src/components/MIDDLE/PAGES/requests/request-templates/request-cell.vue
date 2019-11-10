<template>
  <div @click="clickRequest()">
    <div class="title-style" :style="cellBackColor">
      <div class="request-method" :style="requesMethodColor">{{requestMethod}}</div>
      <div class="request-origin">{{requestTitle}}</div>
      <div class="request-time">{{requestTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    request: Object
  },
  methods: {
    clickRequest: function() {
      this.$store.commit("changeCurrentRequest", this.request);
    }
  },
  computed: {
    cellBackColor: function() {
      let selected = false;
      let currentR = this.$store.state.currentRequest;
      if (currentR !== undefined) {
        let sid = this.request.text.request.uuid;
        let cid = currentR.text.request.uuid;
        if (sid === cid) {
          selected = true;
        }
      }
      if (selected) {
        return { "background-color": "#dda889" };
      } else {
        return { "background-color": "#41B983" };
      }
    },
    requesMethodColor: function() {
      if (this.requestMethod === "GET") {
        return { "background-color": "grey" };
      } else if (this.requestMethod === "POST") {
        return { "background-color": "red" };
      } else {
        return { "background-color": "cyan" };
      }
    },
    currentUrl: function() {
      let request = this.request;
      return new URL(request.text.request.url);
    },
    requestTitle: function() {
      return this.currentUrl.origin + this.currentUrl.pathname;
    },
    requestMethod: function() {
      return this.request.text.request.HTTPMethod;
    },
    requestTime: function() {
      let date = new Date(this.request.text.request.timeStamp);
      return (
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.title-style {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.request-method {
  margin: 5px;
}
.request-origin {
  flex: 1;
  margin-left: 5px;
  padding-right: 5px;
}
.request-time {
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 5px;
  background-color: rgb(230, 148, 25);
}
</style>