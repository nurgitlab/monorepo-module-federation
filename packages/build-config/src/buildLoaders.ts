import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders (options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: {
            loader: '@svgr/webpack',
            options: {
                icon: true
            }
        },
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    }

    const esbuildLoader = {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'esbuild-loader',
        options: {
            loader: 'tsx',
            target: 'es2020'
        },
        exclude: /node_modules/
    };

    return [fileLoader, cssLoader, svgLoader, esbuildLoader]
}