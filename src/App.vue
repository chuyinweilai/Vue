<template>
  <!-- <div id="app"> -->
    <router-view/>
  <!-- </div> -->
</template>
<script>
export default {
}
</script>
<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .24rem;
}
#container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .24rem;
  overflow: hidden;
}

/* image 各种填充方式 */
.contain-img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.cover-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
