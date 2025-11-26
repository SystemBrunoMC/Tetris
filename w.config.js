// Importación de módulos
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var version = require('./package.json').version;

// Entrada del proyecto
var entry = __dirname + '/src/index.js';

// Salida de los archivos compilados
var output = {
  filename: 'page/[name]/index.js', // JS principal
  chunkFilename: 'chunk/[name].[chunkhash:5].chunk.js', // JS dividido
};

// Mapa de fuentes para debugging
var devtool = 'source-map';

// Configuración de ESLint
var eslint = {
  configFile: __dirname + '/.eslintrc.js',
};

// Loaders para distintos tipos de archivos
var loaders = [
  {
    test: /\.(json)$/,
    exclude: /node_modules/,
    loader: 'json',
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel!eslint-loader',
  },
  {
    test: /\.(?:png|jpg|gif)$/,
    loader: 'url?limit=8192',
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules&localIdentName=[hash:base64:4]!postcss!less'
    ),
  },
];

// Plugins para desarrollo
var devPlugins = [
  // Copiar recursos estáticos
  new CopyWebpackPlugin([
    { from: './src/resource/music/music.mp3' },
    { from: './src/resource/css/loader.css' },
  ]),
  // HMR
  new webpack.HotModuleReplacementPlugin(),
  // Evitar errores que rompan el build
  new webpack.NoErrorsPlugin(),
  // Abrir navegador automáticamente
  new OpenBrowserPlugin({
    url: 'http://127.0.0.1:8080/',
  }),
  // Extraer CSS a archivo separado
  new ExtractTextPlugin('css.css', {
    allChunks: true,
  }),
];

// Plugins para producción
var productionPlugins = [
  // Definir ambiente de producción
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  // Copiar recursos
  new CopyWebpackPlugin([
    { from: './src/resource/music/music.mp3' },
    { from: './src/resource/css/loader.css' },
  ]),
  // Generar HTML
  new HtmlWebpackPlugin({
    template: __dirname + '/server/index.tmpl.html',
  }),
  // Minificar JS
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  // Extraer CSS con versión
  new ExtractTextPlugin('css-' + version + '.css', {
    allChunks: true,
  }),
];

// Configuración del servidor de desarrollo
var devServer = {
  contentBase: './server', // Carpeta base
  colors: true, // Colores en consola
  historyApiFallback: false, // No usar fallback
  port: 8080, // Puerto
  hot: true, // Hot Module Replacement
  inline: true, // Livereload
  host: '0.0.0.0', // Escucha todas las IPs
  disableHostCheck: true,
};

// Exportación de la configuración
module.exports = {
  entry: entry,
  devtool: devtool,
  output: output,
  loaders: loaders,
  devPlugins: devPlugins,
  productionPlugins: productionPlugins,
  devServer: devServer,
  postcss: function () {
    return [precss, autoprefixer];
  },
  version: version,
};