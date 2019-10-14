const webpack = require("webpack");
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env = {}, opts) => {
    const compilerOptions = require('./tsconfig.json').compilerOptions;
    const alias = {};
    Object.keys(compilerOptions.paths).forEach((item) => {
        const key = item.replace('/*', '');
        const value = path.resolve('./', compilerOptions.paths[item][0].replace('/*', ''));
        alias[key] = value;
    });

    const plugins = [
        new CleanWebpackPlugin([
            './dist'
        ]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([
            { from: path.resolve('./', "./resources/svg/"), to: __dirname + "/dist/resources/svg/"},
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'chunks/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: "html/index.html",
            template: path.resolve('./', 'resources/html/index.html'),
            chunks: ["mainStyles", "main"],
            chunksSortMode: "manual",
            inject: true
        })
    ];
    const webpackConfig = {
        target: 'web',
        mode: env.prod ? 'production' : 'development',
        entry: {
            main: "./src/index.tsx",
            mainStyles: "./resources/layout/main.scss",
        },
        output: {
            filename: "bundles/[name].[contenthash].js",
            chunkFilename: "chunks/[name].[contenthash].js",
            path: __dirname + "/dist",
            publicPath: "/"
        },
        optimization: {
            occurrenceOrder: true,
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
        resolve: {
            alias: alias,
            extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json"],
            modules: [
                path.resolve(__dirname, "src"),
                "node_modules"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    include: [/src/, /node_modules/],
                    loader: "awesome-typescript-loader"
                },
                {
                    enforce: "pre",
                    test: /\.(ts|tsx)?$/,
                    use: [{
                        loader: "tslint-loader",
                        options: {
                            formatter: 'stylish',
                            fix: true
                        }
                    }]
                },
                {
                    type: 'javascript/auto',
                    test: /\.json?$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'json-loader'
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
            ]
        },
        stats: {
            colors: true
        },
        plugins: plugins
    };

    if (env.prod) {
        plugins.push(
            new CompressionPlugin({
                test: /\.(js|css|json|html|ttf)/,
                filename: "[path].gz[query]",
                algorithm: "gzip",
                threshold: 0,
                minRatio: 0.9,
                deleteOriginalAssets: false
            })
        );
    } else {
        plugins.push(new WriteFilePlugin());
        plugins.push(new BundleAnalyzerPlugin());
        webpackConfig.devServer = {
            port: 12345,
            host: "localhost",
            open: true,
            contentBase: path.resolve(__dirname, "dist"),
            publicPath: "/",
            watchContentBase: true,
            watchOptions: {
                ignored: /node_modules/
            },
            openPage: 'html/index.html',
            historyApiFallback: {
                index:'html/index.html'
            }
        };
    }
    return webpackConfig;
};
