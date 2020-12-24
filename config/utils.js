
const path = require('path')

const getComponentPath = (componentName) => {
  return path.resolve(__dirname, `./../components/${componentName}/index.vue`)
}

module.exports = {
  getComponentPath
}