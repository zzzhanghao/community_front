// 配置一些别名

module.exports = {
  configureWebpack: {
      resolve: {
          //别名
          alias:{
              //这个@ 人家vue3 已经配置过了，就是src的意思。
              'assets': '@/assets',
              'router': '@/router',
              'components': '@/components',
              'views': '@/views',
              'api': '@/api'
          }
      }
  },
  lintOnSave: false
}