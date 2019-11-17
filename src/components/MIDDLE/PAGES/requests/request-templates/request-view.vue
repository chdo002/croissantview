<template>
  <div>
    <vue-json-pretty
      :data="httpObj"
      :highlightMouseoverNode="true"
      @click="handleClick"
      @change="handleChange"
    ></vue-json-pretty>
    <vue-json-pretty v-if="selectContent !== undefined" :data="selectContent"></vue-json-pretty>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";

export default {
  components: {
    VueJsonPretty
  },
  data () {
      return {
          selectContent:undefined
      }
  },
  props: {
    httpObj: Object
  },
  updated() {
    this.selectContent = httpObj.httpBody;
  },
  methods: {
    handleClick(path, data, treeName = "") {
      //   this.itemPath = path
      //   this.itemData = !data ? data + '' : data // 处理 data = null 的情况
      this.selectContent = data;
    },
    handleChange(newVal, oldVal) {
      console.log("newVal: ", newVal, " oldVal: ", oldVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>