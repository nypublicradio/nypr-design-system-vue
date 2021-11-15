const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      }
    },
    "@storybook/addon-essentials"
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
            prependData: '@import "./src/styles/gothamist.scss";'
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    // config.module.rules.push({
    //   test: /\.jsx$/,
    //   use: [{
    //     loader: 'babel-loader',
    //     options: {
    //       plugins: ['@babel/plugin-transform-react-jsx']
    //     }
    //   }],
    //   include: path.resolve(__dirname, './custom/components'),
    // });

    // config.resolve.modules = [
    //   ...(config.resolve.modules || []),
    //   path.resolve(__dirname, "../src"),
    // ];

    // Return the altered config
    return config;
  }
};
