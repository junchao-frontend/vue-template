// vue-cli3以后，我们修改webpack配置，需要自己在项目根路径下创建vue.config.js文件。
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  devServer: {
    port: 5000,
    open: true
  },
  publicPath: './', // 静态资源路径默认 '/' 打包后会白屏
  outputDir: 'manage', // 打包后文件的目录 默认为dist
  assetsDir: 'static', // outputDir的静态资源(js、css、img、fonts)目录  默认为'' 没有单独目录js/css/img在根目录中。
  productionSourceMap: false // map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错，有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错
}
