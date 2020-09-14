module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/styles/white-label.scss";'
      }
    }
  }
}
