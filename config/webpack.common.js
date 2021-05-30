const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [paths.src + '/index.js'],

    output: {
        path: paths.build,
        filename: '[name].build.js',
        publicPath: '/',
        assetModuleFilename: 'resources/[name][ext]',
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            favicon: paths.src + '/images/favicon.ico',
            template: paths.src + '/template.html',
            filename: 'index.html',
        }),
    ],

    module: {
        rules: [
            // js
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

            // styles
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                ],
            },

            // images
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

            // fonts and SVG
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
        ],
    },
};
