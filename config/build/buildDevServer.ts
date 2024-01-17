import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConficurations } from "webpack-dev-server";


export function buildDevServer(option: BuildOptions): DevServerConficurations {
    return {
        port: option.port,
        open: true,
        historyApiFallback:true,
        hot:true,
    }
}