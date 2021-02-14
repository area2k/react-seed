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

  if (process.env.NODE_ENV === 'development') {
    plugins.push(['react-refresh/babel'])
  }

  return {
    presets,
    plugins
  }
}
