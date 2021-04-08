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

]



const router = new VueRouter({
  routes
})

export default router
