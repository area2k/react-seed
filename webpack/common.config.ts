import fs from 'fs'
import { resolve } from 'path'

import DotenvPlugin from 'dotenv-webpack'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { Configuration } from 'webpack'

const gitRevisionPlugin = new GitRevisionPlugin({
  branch: true, versionCommand: 'describe --tags --abbrev=0'
})

const nodeEnv = process.env.NODE_ENV
const envConfigPath = fs.existsSync(`./.env.${nodeEnv}`)
  ? `./.env.${nodeEnv}`
  : './.env'

const buildTime = new Date().toISOString()

export default {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: ['graphql-tag/loader']
      }
    ]
  },
  plugins: [
    new DotenvPlugin({
      path: envConfigPath,
      safe: false,
      systemvars: true
    }),
    gitRevisionPlugin,
    new webpack.DefinePlugin({
      '__BUILD_VERSION': JSON.stringify(gitRevisionPlugin.version()),
      '__BUILD_COMMIT': JSON.stringify(gitRevisionPlugin.commithash()),
      '__BUILD_BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
      '__BUILD_DATE': JSON.stringify(buildTime)
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: resolve('public/index.ejs'),
      templateParameters: {
        buildBranch: gitRevisionPlugin.branch(),
        buildDate: buildTime,
        buildSha: gitRevisionPlugin.commithash().substring(0, 7),
        buildVersion: gitRevisionPlugin.version(),
        title: 'A2K React Seed'
      }
    })
  ]
} as Configuration
