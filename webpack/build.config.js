const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const commonConfig = require('./common.config')

const buildConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[git-revision-hash].js',
    chunkFilename: '[name].[git-revision-hash].chunk.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      openAnalyzer: false
    })
  ]
}

module.exports = merge(commonConfig, buildConfig)
