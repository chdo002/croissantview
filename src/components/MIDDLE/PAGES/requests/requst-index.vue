<template>
  <div id="request-back" class="back">
    <!--左侧网络列表-->
    <div id="request-left-list" class="left-bar">
      <!-- <div style="display: flex;flex-direction: row;background-color: white">
                <label style="width: 50%; text-align: center;">Structure</label>
                <label style="width: 50%; text-align: center;">Sequence</label>
      </div>-->
      <!--            列表-->
      <ul id="request-list" class="host-list">
        <li v-for="todo in allRequests">
          <host v-bind:request="todo" />
        </li>
      </ul>
      <!--            底部过滤条-->
      <div class="host-filter">
        <input class="filter-style" placeholder="Filter" @input="onInput" />
      </div>
    </div>

    <!--中间调节-->
    <div id="request-resize-bar" class="resize-bar"></div>

    <!--右侧网络内容-->
    <div id="request-content" class="content-area">
      <Request :request="currentRequest" />
    </div>
  </div>
</template>

<script>
import Host from "@/components/MIDDLE/PAGES/requests/request-templates/request-cell";
import Request from "@/components/MIDDLE/PAGES/requests/request-templates/request-content";

export default {
  mounted() {
    this.setUpResizeAction();
    let width = this.$store.state.requestListBarWidth;
    this.changeLeftBarToWidth(width);

    this.setUpKeyboardAction();
  },
  components: {
    Host,
    Request
  },
  data() {
    return {
      currentRequest: undefined
    };
  },
  watch: {
    allRequests: function() {
      this.$nextTick(() => {
        let div = document.getElementById("request-list");
        div.scrollTop = div.scrollHeight;
      });
    }
  },
  computed: {
    allRequests: function() {
      return this.$store.getters.displayRequests;
    },
    requestBack: function() {
      return document.getElementById("request-back");
    },
    leftList: function() {
      return document.getElementById("request-left-list");
    },
    resizeBar: function() {
      return document.getElementById("request-resize-bar");
    },
    requestContent: function() {
      return document.getElementById("request-content");
    }
  },
  methods: {
    clickRequest: function(request) {
      this.currentRequest = request;
    },
    onInput: function(content) {
      this.$store.commit("addRequest", content.target.value);
    },
    setUpKeyboardAction: function() {
      let self = this;
      document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        // debugger;
        if (e) {
          self.$store.commit("scrolllRequest",e.keyCode);
        }
      };
    },
    setUpResizeAction: function() {
      let self = this;
      this.resizeBar.onmousedown = function() {
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
          self.resizeBar.releaseCapture && self.resizeBar.releaseCapture();
        };

        document.onmousemove = function(resizeBar) {
          let currentWidth = resizeBar.clientX - 120;
          self.changeLeftBarToWidth(currentWidth);
        };
      };
    },
    changeLeftBarToWidth: function(newWidth) {
      let targetW = newWidth;
      if (newWidth < 340) {
        targetW = 340;
      }
      if (newWidth > 400) {
        targetW = 400;
      }
      this.$store.commit("changeRequestBarWidth", targetW);
      this.leftList.style.width = targetW + "px";
      this.resizeBar.style.left = targetW + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.back {
  display: flex;
  flex-direction: row;
}
/*左侧区域*/
.left-bar {
  display: flex;
  flex-direction: column;
  background-color: rgba(221, 168, 137, 0.51);
  width: 150px;
  height: 100%;
  box-shadow: $bar-shadow;
  z-index: 12;
}
.host-list {
  /* 域名列表 */
  /*flex: 1;*/
  margin: 0 0 0 0;
  height: calc(100% - 40px);
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.host-filter {
  /* 过滤条 */
  background-color: #41b983;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .filter-style {
    margin: 5px 5px 5px 5px;
    height: 25px;
    flex: 1;
  }
}
.resize-bar {
  width: 10px;
  background-color: #52e161;
  box-shadow: $bar-shadow;
  cursor: ew-resize;
  z-index: 13;
}
/* 右侧内容 */
.content-area {
  background-color: white;
  flex: 1;
}
ul {
  padding: 5px 5px 5px 5px;
  list-style: none;
}
</style>