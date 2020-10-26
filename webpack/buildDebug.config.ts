import { Configuration } from 'webpack'
import { CustomizeRule, mergeWithRules } from 'webpack-merge'

import buildConfig from './build.config'

const buildDebugConfig: Configuration = {
  optimization: {
    minimize: false
  },
  plugins: []
}

module.exports = mergeWithRules({ plugins: CustomizeRule.Replace })(buildConfig, buildDebugConfig)
