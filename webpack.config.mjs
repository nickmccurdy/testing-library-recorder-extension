import webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'

const {IgnorePlugin} = webpack

export default {
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: ['manifest.json', 'other/octopus.png'],
    }),
    new HtmlPlugin(),
    new IgnorePlugin({
      resourceRegExp: /^puppeteer$/,
    }),
  ],
}
