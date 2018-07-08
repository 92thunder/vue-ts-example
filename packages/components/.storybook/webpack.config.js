const merge = require('webpack-merge')
const myConfig = require('./../../../webpack.config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (storybookBaseConfig, configType) => {
  merge(storybookBaseConfig, myConfig)
  storybookBaseConfig.plugins.push(new VueLoaderPlugin())
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: ['vue-style-loader', 'css-loader']
  })
  return storybookBaseConfig
}
