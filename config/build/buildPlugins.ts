import HTMLWebpackPligin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'


export function buildPlugins({ paths,isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPligin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
            chunkFilename:'css/[name].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__:JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer:false
        })
    ]

}