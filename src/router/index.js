import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import '../assets/css/global.css'


Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  routes: [
    //直接返回到"/"位置返回对应的数值,redirect路由重定向用户第一次访问网站页面("/根目录"首页)时，地址栏里边没有“#锚点”的信息，也就没有对应的组件用于显示，用户体验不好，现在可以通过重定向实现一种效果，即当浏览器没有任何 #锚点信息时，默认也给显示一个组件。
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
   
  ]
})

export default router
