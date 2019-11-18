<template>
  <div>
    <vue-json-pretty
      :data="httpObj"
      :highlightMouseoverNode="true"
      @click="handleClick"
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
  methods: {
    handleClick(path, data, treeName = "") {
      this.selectContent = data;
    }
  },
  computed:{
      prop_httpobj(){
          return this.httpObj;
      }
  },
  watch: {
      prop_httpobj(newV,oldV){
          this.selectContent = newV.httpBody;
      }
  },
};
</script>

<style lang="scss" scoped>
</style>