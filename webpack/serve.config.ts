import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import webpack, { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

import commonConfig from './common.config'

const serveConfig: Configuration = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: ['./src'],
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true
  },
  watchOptions: {
    ignored: ['node_modules']
  },
  resolve: {
    alias: {
      'react': require.resolve('../node_modules/react')
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ReactRefreshPlugin()
    // new DuplicatePackageCheckerPlugin({ verbose: true })
  ]
}

module.exports = merge(commonConfig, serveConfig)
