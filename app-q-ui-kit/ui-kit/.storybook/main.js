/** @type { import('@storybook/react-vite').StorybookConfig } */

const {
  sassPostCssAddon
} = require('storybook-addon-sass-postcss');
const sassLoader = require('sass');
import { mergeConfig } from 'vite';
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", {
    name: '@storybook-addon-sass-postcss',
    options: {
      sassLoaderOptions: {
        implementation: sassLoader
      }
    }
  }, '@storybook-design-token'],
  async viteFinal(config, {
    configType
  }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;