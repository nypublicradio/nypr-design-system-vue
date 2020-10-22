const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async (config, {configType}) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(css|scss)$/,
      use: [
        'style-loader', 'css-loader', 'sass-loader',
        {
          loader: "sass-loader",
          options: {
            prependData: '@import "./src/styles/white-label.scss";'
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
  }
};
