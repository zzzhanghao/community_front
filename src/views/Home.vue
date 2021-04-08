<template>
  <div class="home">
    <!-- box是buefy里的一个类，就是会显示出一个小盒子-->
    <div class="box">{{billboard.content}}</div>
  </div>
</template>

<script>
//之前没带 中括号 报错
import {getBillboard} from '@/api/billboard.js'
export default {
  name: 'Home',
  data() {
    return {
      billboard: {
        content: ''
      }
    }
  },
  created() {
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value
        this.billboard = data
        }
      )
    }
  }
}
</script>
