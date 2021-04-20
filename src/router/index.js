import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //路由懒加载
    component: () => import('@/views/Home')
  },
  {
    path: '/register',
    name: 'register',
    //路由懒加载
    component: () => import('@/views/auth/Register'),
    meta: { title: '注册' },

  },
  {
    path: '/404',
    name: '404',
    //路由懒加载
    component: () => import('@/views/error/404'),
    meta: {title: '404-NotFound'}
  },
  //输入错误 就会跳转
  {
    path: '*',
    redirect: '/404',
    
    hidden: true
  }

]



const router = new VueRouter({
  routes
})

export default router
