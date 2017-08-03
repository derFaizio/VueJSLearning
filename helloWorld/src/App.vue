<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png">
    </div>
    <div>   
      <router-link to='/home'>Home</router-link>
      <router-link to='/users/Test User'>Users</router-link>
    </div>
    <router-view></router-view>  
  </div>
  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
