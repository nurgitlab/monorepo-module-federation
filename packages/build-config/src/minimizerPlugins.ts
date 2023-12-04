import webpack, {Configuration, DefinePlugin} from "webpack";
import {BuildOptions} from "./types/types";
import {EsbuildPlugin} from "esbuild-loader";

export function minimizerPlugins ({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development', isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new EsbuildPlugin({
            target: 'es2015',
            css: true  // Apply minification to CSS assets
        }),
    ]

    return plugins.filter(Boolean)
}