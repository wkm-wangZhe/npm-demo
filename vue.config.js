const isProduct = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath:'',//打包部署时的路径
  outputDir:'dist',// 生产环境构建目录
  assetsDir:'',// 生成静态资源的目录
  indexPath:'breadcrumnav.js',// 输出路径
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack:config => {
    config.module
      .rule('js')
      .include
      .add(__dirname + 'packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  lintOnSave:true,// 是否在保存的时候检查，这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  productionSourceMap:true,// 生成环境是否生成sourceMap
  css:{
    extract:isProduct,//是否使用css分离插件
    sourceMap:false,// 是否开启css sourcemap
    loaderOptions:{},// css配置
    requireModuleExtension:true,//启用css modules
  },
  devServer:{// 开发配置
    host:'localhost',
    port:8080,
    https:false,
    hotOnly:false,
    open:true,// 是否自动打开浏览器
    // proxy:{},// 代理
  },
  pluginOptions:{// 第三方插件配置

  }
}