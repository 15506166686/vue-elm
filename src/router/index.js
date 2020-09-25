import Vue from 'vue'
import VueRouter from 'vue-router'
import fa from "element-ui/src/locale/lang/fa";

Vue.use(VueRouter)

/* 引入view视图 懒加载模式 */
const Home = () => import('@/views/Home/home')
const City = () => import('@/views/City/city')
const Login = () => import('@/views/Login/login')
const Profile = () => import('@/views/Profile/profile')
const UserInfo = () => import('@/views/Profile/Children/userInfo')
const Search = () => import('@/views/Search/search')
const Order = () => import('@/views/Order/order')
const Msite = () => import('@/views/Msite/msite')
const Food = () => import('@/views/Food/food')

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
      component: Profile,
      children: [
        {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/food',
      name: 'food',
      component: Food,
      meta: {
        keepAlive: false
      }
    }
  ]
})

export default router