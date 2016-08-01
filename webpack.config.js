const webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index'
    },
    output: { filename: './dist/[name].js' },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
        }]
    },
    plugins: [
        new ExtractTextPlugin('./dist/[name].css', {
            allowChunks: true
        })
    ]
};