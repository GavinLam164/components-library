
const config = require('./webpack.config')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const getComponentPath = require('./utils').getComponentPath

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
  config.mode('production')
  setEntry(componentName)
  setOutput(componentName)
  setPlugins()
  setExternals()

  return config
}


module.exports = createConfig