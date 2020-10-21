module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: '@import "./src/styles/wnyc.scss";'
            }
          }
        ]
      }
    ]
  }
};
