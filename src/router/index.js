import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 引入view视图 懒加载模式 */
const Home = () => import('@/views/Home/home')
const City = () => import('@/views/City/city')
const Login = () => import('@/views/Login/login')
const Profile = () => import('@/views/Profile/profile')

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
    },
    {
      path: '/city/:cityId',
      name: 'city',
      component: City
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router