export default function (api) {
  api.cache.using(() => process.env.NODE_ENV)

  const presets = [
    ['@babel/typescript'],
    ['@babel/react', { runtime: 'automatic', development: process.env.NODE_ENV == 'development' }],
    ['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: { version: 3, proposals: true } }]
  ]

  const plugins = [
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['module-resolver', {
      root: ['.'],
      alias: { '@': './src' }
    }]
  ]

  // TODO: remove STORYBOOK check after https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/308
  if (process.env.NODE_ENV === 'development' && !process.env.STORYBOOK) {
    plugins.push(['react-refresh/babel'])
  }

  return {
    presets,
    plugins
  }
}
