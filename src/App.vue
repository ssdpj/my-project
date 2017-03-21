<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view></router-view> -->
    <first></first>
    <second></second>
    <ul>
      <li><router-link to="/first">点我跳转到第一个页面</router-link></li>
      <li><router-link to="/second">点我跳转到第二个页面</router-link></li>
    </ul>
  </div>
</template>

<script>
import first from './components/first.vue'
import second from './components/second.vue'
export default {
  data(){
    return {
      name:'app'
    }
  },
  components:{first,second}
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
