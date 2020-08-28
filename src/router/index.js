import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 引入view视图 懒加载模式 */
const Home = () => import('@/views/Home/home')

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

export default router