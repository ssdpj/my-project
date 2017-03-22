<template>
  <div id="app">
    <img src="./assets/logo.png">
     <router-view></router-view>
    <first></first>
    <second></second>
    <ul>
      <li><router-link to="/first">点我跳转到第一个页面{{name}}</router-link></li>
      <li><router-link to="/second">点我跳转到第二个页面</router-link></li>
    </ul>
    <!--<el-card class="box-card">-->
      <div slot="header" class="clearfix">
        <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
      </div>
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
    <!--</el-card>-->
  </div>
</template>

<script>
import first from './components/first.vue'
import second from './components/second.vue'
export default {
  data(){
    return {
      name:'app',
      articles:[]
    }
  },
  components:{first,second},
  mounted:function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',
      {},{
        headers:{},emulateJSON:true}).then(function (response) {
      console.log(response.data.subjects)
      this.articles=response.data.subjects
    },function (response) {
      console.log(response)
    })
  }
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
