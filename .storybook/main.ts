import { StorybookConfig } from '@storybook/react/types'

export default {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: 'webpack5'
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        esModuleInterop: true
      }
    }
  },
  // TODO: add back after https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/308
  // reactOptions: { fastRefresh: true }
} as StorybookConfig
