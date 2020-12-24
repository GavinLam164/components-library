

const webpack = require('webpack')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const createConfig = require('../config/webpack.config.dev.js')

const run = (componentName) => {
  const compiler = webpack(createConfig(componentName).toConfig())
  const app = express()
  app.use(devMiddleware(compiler))
  app.use(hotMiddleware(compiler))
  app.listen(8080, (err) => {
    if(err) {
      console.log(err)
    }
  })
}

const componentName = process.argv[2]

run(componentName)

