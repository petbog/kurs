import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolwe } from "./buildResolwe";
import { BuildOptions } from "./types/config";
import path from "path";
import webpack from 'webpack'


export function buildWebpaqckConfig(option: BuildOptions): webpack.Configuration {
    
    const {paths,mode } = option;

    return {
        mode: mode,
        entry:paths.entry,
        output: {
            filename: "[name].js",
            path:paths.build,
            clean: true,

        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolwe(),

    }
}