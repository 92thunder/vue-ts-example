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
  storybookBaseConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/]
    }
  })
  return storybookBaseConfig
}
