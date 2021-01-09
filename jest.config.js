module.exports = {
  setupFiles: ['jest-canvas-mock'],
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'vue'],
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': 'babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(vue-lottie)/)']
}
