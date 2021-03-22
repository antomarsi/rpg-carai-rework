// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createWebpackAliases } = require('./webpack.helpers');

// Webpack aliases to resolve
const aliases = createWebpackAliases({
  '@src': 'src',
  '@app': 'src/app',
  '@static': 'src/static',
  '@main': 'src/main',
});

// Export aliases
module.exports = aliases;
