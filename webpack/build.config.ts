import path from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import webpack, { Configuration, WebpackPluginInstance } from 'webpack'
import { merge } from 'webpack-merge'

import commonConfig from './common.config'

const buildConfig: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src'],
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[git-revision-hash].js',
    chunkFilename: '[name].[git-revision-hash].chunk.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }) as WebpackPluginInstance
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

export default merge(commonConfig, buildConfig)
