//每日一句
<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥳 每日一句</span>
    </div>
    <div> 
      <!-- 这个类也是 bulma这个框架提供的 -->
      <div class="has-text-left block">
        {{ tip.content}}
      </div> 
      <div class="block mt-5 has-text-right">
        --{{tip.author}}
      </div>
    </div>
  </el-card>
</template>

<script>
import {getTodayTip} from '@/api/tip'
export default {
  name: 'Tip',
  data() {
    return {
      tip: {}
    };
  },

  components: {},

  computed: {},
  created(){
    this.fetchTodayTip()
  },
  methods: {
    async fetchTodayTip(){
      getTodayTip().then(response => {
        const {data} = response
        this.tip = data

      })
    }
  },
};
</script>
<style lang='css' scoped>


</style>