var config = require('./w.config');

// production ambiente configurado
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/docs',
    filename: 'app-' + config.version+'.js',
    // --- CORRECCIÓN CLAVE PARA GITHUB PAGES ---
    // Esto asegura que todos los recursos se busquen en el subdirectorio /Tetris/
    publicPath: 'https://systembrunomc.github.io/Tetris/', 
  },
  eslint: config.eslint,
  module: {
    loaders: config.loaders
  },
  plugins: config.productionPlugins,
  postcss: config.postcss
};