// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from "vue-router"
// import VueResource from 'Vue-resource'
Vue.use(VueRouter);
// Vue.use(VueResource);

// Vue.config.productionTip = false;
//定义组件
const First={template:"<div><h2>我是第一个子页面呀</h2></div>"}
import second from "./components/second.vue"
//创建一个路由实例
//并配置路由规则
const router=new VueRouter({
  // mode:'history',
  // base:__dirname,
  routes:[
    {
      path:'/first',
      component:First
    },
    {
      path:'/second',
      component:second
    }
  ]
})
// 现在我们可以启动应用了
// 路由器会创建一个App实例，并且挂载到选择符#app匹配的元素上
// const app=new App({
//   router:rou,
//   render:h=>h(App)
// }).$mount('#app')
const app=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App ,First,second}
})
