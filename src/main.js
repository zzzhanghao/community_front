import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入 buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
//引入 ElementUi
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/app.css"
//使用
Vue.use(Buefy)
Vue.use(ElementUi)


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
