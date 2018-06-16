const { join } = require('path');
const { IgnorePlugin } = require('webpack');

module.exports = () => ({
  entry: './src/index.js',
  watch: false,
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  resolve: {
    modules: [join(__dirname, 'node_modules'), join(__dirname, 'src')],
    extensions: ['.mjs', '.js', '.json', '.jsx'],
  },
  plugins: [new IgnorePlugin(/^vertx$/)],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        loader: 'babel-loader',
      },
    ],
  },
});
