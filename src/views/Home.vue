
<template>
  <div class="home">
    <!-- box是buefy里的一个类，就是会显示出一个小盒子-->
    <div class="box">🔔{{billboard.content}}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <post></post>
      </div>
      <div class="column">
        <card-bar></card-bar>
        <login-welcome></login-welcome>
        <tip/>
        <promotion/>
      </div>
    </div>
  </div>
</template>


<script>

//之前没带 中括号 报错
import {getBillboard} from '@/api/billboard.js'
import CardBar from '../components/card/CardBar.vue'
import Post from '../components/post/Index.vue'
import LoginWelcome from '../components/card/LoginWelcome'
import Promotion from '../components/card/Promotion'
import Tip from '../components/card/Tip'

export default {
  name: 'Home',
  data() {
    return {
      billboard: {
        content: ''
      }
    }
  },
  components: {
    CardBar,
    Post,
    LoginWelcome,
    Promotion,
    Tip

  },
  created() {
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        //对象的 解构赋值
        const { data } = value
        this.billboard = data
        }
      )
    }
  }
}
</script>
