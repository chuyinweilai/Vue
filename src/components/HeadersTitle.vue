<template>
    <div id="headers">
      <a-button type="primary">Primary</a-button>
    </div>
</template>

<script >
import Vue from 'vue'
import { Button } from 'ant-design-vue';
Vue.use(Button);

export default {
  data(){
    return{
      title: 'hello world'
    }
  } ,
  props: {
    msg: String
  },
  computed: {
    router () {
      return this.$store.state.router
    }
  },
  created(){
      this.$data.title="hello Miku"
  },
  beforeCreate(e){
  }
}
</script>

<style>
#headers{
    height: 1rem;
    background: #39c5bb
}
</style>
