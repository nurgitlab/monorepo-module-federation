import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import {EsbuildPlugin} from "esbuild-loader";


export function buildPlugins ({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development', isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico'),
            publicPath: '/',
        }),
        new EsbuildPlugin({
            define: {
                __PLATFORM__: JSON.stringify(platform)
            }
        }),
        new ForkTsCheckerWebpackPlugin(),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        )
        if (analyzer) {
            plugins.push(
                new BundleAnalyzerPlugin()
            )
        }
    }

    return plugins.filter(Boolean)
}