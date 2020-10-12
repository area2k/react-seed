import path from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import webpack, { Configuration, WebpackPluginInstance } from 'webpack'
import { merge } from 'webpack-merge'
// const ManifestPlugin = require('webpack-manifest-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

import commonConfig from './common.config'

const buildConfig: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src'],
  output: {
    path: path.resolve('./dist'),
    // filename: '[name].[git-revision-hash].js',
    // chunkFilename: '[name].[git-revision-hash].chunk.js'
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
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
    // Pending Webpack v5 support
    // new ManifestPlugin({
    //   fileName: 'asset-manifest.json',
    // }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new CompressionPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   generateStatsFile: true,
    //   openAnalyzer: false
    // })
  ]
}

module.exports = merge(commonConfig, buildConfig)
