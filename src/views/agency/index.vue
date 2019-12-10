<template>
    <div class="container">
      <h2>User {{ this.$route.params.id }}</h2>
      <router-link to="/others/teachers">顾问详情</router-link>
    </div>
</template>
<style>
    .container{
        width: 100%;
        height: 100%;
        background: orange;
    }
</style>
