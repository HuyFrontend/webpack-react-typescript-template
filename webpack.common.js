
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Webpack app',
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            /** load ts */
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            /** load images */
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            /** load css */
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader'],
            },
            /** load sass */
            // {
            //     test: /\.scss$/,
            //     loaders: ['style-loader', 'css-loader', 'sass-loader']
            // },
        ]
    }
};