import path from "path";
import HTMLWebpackPligin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build'),
    clean: true,

  },
  plugins: [
    new HTMLWebpackPligin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

}
export default config;

