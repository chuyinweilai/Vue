<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">问答</router-link> |
      <router-link to="/activity">我的</router-link>
    </div>
  </div>
</template>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .24rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#nav {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
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
