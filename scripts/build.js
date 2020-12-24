

const webpack = require('webpack')
const createConfig = require('../config/webpack.config.prod.js')

const run = (componentName) => {
  const compiler = webpack(createConfig(componentName).toConfig())
  compiler.run((err) => {
    if(err) {
      console.error(err)
    }
  })
}

const componentName = process.argv[2]

run(componentName)

