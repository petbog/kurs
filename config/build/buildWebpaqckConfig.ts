import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolwe } from "./buildResolwe";
import { BuildOptions } from "./types/config";
import webpack from 'webpack'


export function buildWebpaqckConfig(option: BuildOptions): webpack.Configuration {

    const { paths, mode,isDev } = option;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders(option)
        },
        resolve: buildResolwe(option),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer:isDev ?buildDevServer(option) : undefined
    }
}