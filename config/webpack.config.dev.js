
const config = require('./webpack.config')
const webpack = require('webpack')
const HtmlWepbackPlugin = require('html-webpack-plugin')
const path = require('path')

const setPlugins = () => {
  const plugin = config.plugin.bind(config)
  plugin('html')
    .use(HtmlWepbackPlugin, [{
      filename: 'index.html',
      template: 'index.html'
    }])
  plugin('hot')
    .use(webpack.HotModuleReplacementPlugin)
}

const getComponentPath = (componentName) => {
  return path.resolve(__dirname, `./../components/${componentName}/index.vue`)
}

const setResolve = (componentName) => {
  const alias = config.resolve.alias
  const setAlias = alias.set.bind(alias)
  setAlias('@', getComponentPath(componentName))
}

const setEntry = () => {
  config
    .entry('main')
      .add('/main.js')
      .add('webpack-hot-middleware/client')
      .end()
}

const createConfig = (componentName) => {
  config.mode('development')
  setEntry()
  setPlugins()
  setResolve(componentName)

  return config
}


module.exports = createConfig