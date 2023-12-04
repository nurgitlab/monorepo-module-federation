import webpack from "webpack";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server"
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";
import {buildPlugins} from "./buildPlugins";
import {minimizerPlugins} from "./minimizerPlugins";

export function buildWebpack (options: BuildOptions): webpack.Configuration {
    const isDev = options.mode === 'development'
    const {mode, paths} = options

    return {
        mode: options.mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: 'src-[contenthash].js',
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        optimization: {
            minimizer: minimizerPlugins(options),
        },
        plugins: buildPlugins(options),
        devtool: isDev && "inline-source-map",
        devServer: buildDevServer(options),
    }
}