var path = require('path');
var webpack = require("webpack");


module.exports = {
  entry: './client/index.js', // путь к вашему главному js файлу

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [{ /* Как обрабатывать каждый загружаемый файл */
      test: /\.js$/, // запустим загрузчик во всех файлах .js
      exclude: /node_modules/, // проигнорируем все файлы в папке node_modules
      use: {
        loader:'babel-loader',
        options: { presets: ['env', 'react', 'stage-3'] },
      }
    }
    ] // rules
  },

  devtool: 'source-map',

  plugins: [
    // new webpack.DefinePlugin({
    // 'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // new webpack.optimize.UglifyJsPlugin()
  ]
};