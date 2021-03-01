const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const LiveReloadPlugin = require('webpack-livereload-plugin');
// const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: NODE_ENV, //мод в котором всё собирается
    //точка входа (файл с которого всё собирается)
    context:path.resolve(__dirname, 'public/src'),
    entry: {
        app: './js/public/script.js',
        // admin:'./js/private/script.js',
        style: './styles/style.scss',
        // styleAdmin: './styles/admin.scss',
    }, 
    output: { //куда сохронять и под каким именем
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].js',
        publicPath: './',
        library: '[name]' //<- через это можно будет обратиться ко всему
    },
    
    watch: NODE_ENV == 'development', //пересобирать после обновления файлов
    watchOptions: {
        aggregateTimeout: 100 //сколько времени ожидает после сохроненения
    },

    devtool: 'source-map',

    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
            minSize: 1000
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
          }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        }),
    ],

    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use:[
                MiniCssExtractPlugin.loader,
                {
                    loader:"css-loader",
                    options:{
                        url:url=>!path.isAbsolute(url)
                    }
                },
                "sass-loader"
            ]
        },
        {
            test: /\.(png|jpe?g|gif|woff|ttf|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                  },
              },
            ],
          },
        ],
    },
}