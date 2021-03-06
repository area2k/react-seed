import DuplicatePackageCheckerPlugin from '@cerner/duplicate-package-checker-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import webpack, { Configuration } from 'webpack'
import {} from 'webpack-dev-server' // import for types
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
    // @ts-ignore
    firewall: false,
    historyApiFallback: true,
    host: 'localhost',
    liveReload: false,    // live reload is handled by ReactRefreshPlugin()
    port: 8080
  },
  watchOptions: {
    ignored: ['node_modules']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ReactRefreshPlugin(),
    new DuplicatePackageCheckerPlugin({ verbose: true })
  ]
}

// NOTE: this can fix duplicate versions of react, but breaks new jsx runtime
// resolve: {
//   alias: {
//     'react': require.resolve('../node_modules/react')
//   }
// },

export default merge(commonConfig, serveConfig)
