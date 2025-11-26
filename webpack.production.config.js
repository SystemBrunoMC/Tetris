var config = require('./w.config');

// production ambiente configurado
module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/docs',
    filename: 'app-' + config.version+'.js',
    // --- CORRECCIÓN FINAL Y UNIVERSAL ---
    // Usamos './' (ruta relativa) para asegurar que se cargue desde la ubicación actual (docs/)
    publicPath: './', 
  },
  eslint: config.eslint,
  module: {
    loaders: config.loaders
  },
  plugins: config.productionPlugins,
  postcss: config.postcss
};
