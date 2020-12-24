
const Config = require('webpack-chain')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = new Config()

const setOutput = () => {
  const outputPath = path.resolve(__dirname, '../dist')
  config.output
    .path(outputPath)
    .filename('[name].bundle.js')
}

const setLoaders = () => {
  config.module
    .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
        .loader('vue-loader')

  config.module
    .rule('css')
      .test(/\.css$/)
      .use('vue-style-loader')
        .loader('vue-style-loader')
        .end()
      .use('css-loader')
        .loader('css-loader')
        .options({
          esModule: false // 巨坑
        })

  config.module
    .rule('font')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        })
}

const setPlugins = () => {
  const plugin = config.plugin.bind(config)
  plugin('vue')
    .use(VueLoaderPlugin)
}

setOutput()
setLoaders()
setPlugins()

module.exports = config