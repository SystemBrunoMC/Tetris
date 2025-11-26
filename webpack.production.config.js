var config = require('./w.config');

// production ambiente configurado
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/docs',
    filename: 'app-' + config.version+'.js',
    // --- CORRECCIÓN FINAL PARA GITHUB PAGES ---
    // La ruta relativa al dominio (dominio.github.io/Tetris/)
    publicPath: '/Tetris/', 
  },
  eslint: config.eslint,
  module: {
    loaders: config.loaders
  },
  plugins: config.productionPlugins,
  postcss: config.postcss
};
