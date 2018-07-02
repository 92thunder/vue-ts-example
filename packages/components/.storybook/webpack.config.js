const merge = require('webpack-merge')
const myConfig = require('./../../../webpack.config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (storybookBaseConfig, configType) => {
  merge(storybookBaseConfig, myConfig)
  storybookBaseConfig.plugins.push(new VueLoaderPlugin())
  return storybookBaseConfig
}
