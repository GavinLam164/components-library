
const config = require('./webpack.config')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getComponentPath = (componentName) => {
  return path.resolve(__dirname, `./../components/${componentName}/index.vue`)
}

const setEntry = (componentName) => {
  config
    .entry(componentName)
      .add(getComponentPath(componentName))
      .end()
}

const setOutput = (componentName) => {
  config.output
    .library(componentName)
    .libraryTarget('umd')
}

const setPlugins = () => {
  const plugin = config.plugin.bind(config)
  plugin('clean')
    .use(CleanWebpackPlugin)
}

const setExternals = () => {
  config
    .externals({
      'element-ui':'element-ui'
    })
}

const createConfig = (componentName) => {
  config.mode('development')
  setEntry(componentName)
  setOutput(componentName)
  setPlugins()
  setExternals()

  return config
}


module.exports = createConfig