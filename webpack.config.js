const _                  = require('lodash');
const webpack            = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const isDevelopment      = process.argv.indexOf('-p') === -1;

/**
 * Webpack plugins
 */
const environmentsPlugin = new webpack.DefinePlugin({ __DEV__: JSON.stringify(isDevelopment) });
const commonsPlugin      = new webpack.optimize.CommonsChunkPlugin('./dist/common.js');

/**
 * Webpack data
 */
var entry = {
    index: './src/index'
};
var plugins = [
    new ExtractTextPlugin('./dist/[name].css', {
        allowChunks: true
    }),
    environmentsPlugin,
    new webpack.ProvidePlugin({
        "$"             :"jquery",
        "jQuery"        :"jquery",
        "window.jQuery" :"jquery"
    })
];
if (_.size(entry) > 1) {
    plugins.push(commonsPlugin);
}

/**
 * Webpack config
 */
var webpackConfig = {
    plugins,
    entry,
    devtool: isDevelopment ? "source-map" : "",
    output: { filename: './dist/[name].js' },
    module: {
        preLoaders: [{
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: 'jsxhint-loader'
        }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.s?css$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
        }]
    },
    jshint: {
        node: true,
        esversion: 6
    }
};

module.exports = webpackConfig;