import type { StorybookConfig as StorybookConfigFramework } from '@storybook/react-vite';

import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfigFramework = {
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      // Add any framework-specific options here
    },
  },

  stories: ['../src/components/**/**/*.stories.@(js|jsx|ts|tsx)'],

  // Other global configuration options here
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
};

export default config;
