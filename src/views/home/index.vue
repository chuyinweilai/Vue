<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">问答</router-link>
      <router-link to="/center">我的</router-link>
    </div>
  </div>
</template>

<style scoped>
.view-box{
  display: flex;
  flex: 1;
  width: 100%;
}
#nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
  padding: .3rem;
  font-size: .16rem;
  background: #39c5bb;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
