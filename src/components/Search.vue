<template>
    <div id="headers">
      <a-input placeholder="搜索" :disabled="true">
        <a-icon slot="prefix" type="search" />
      </a-input>
    </div>
</template>

<script >
import Vue from 'vue'
import { Input, Icon } from 'ant-design-vue';
Vue.use(Input);
Vue.use(Icon);

export default {
  computed: {
    router () {
      return this.$store.state.router
    }
  },
}
</script>

<style>
#headers{
    background: #39c5bb
}
</style>
