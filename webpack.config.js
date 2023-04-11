const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



module.exports ={
    mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
        //   new CssMinimizerPlugin(),
           '...',
        ],
      },
    module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", {
                    // почитай подробнее, что ты тут установил и как оно работает:
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')],
                        }
                    }
                },
                "sass-loader",
            ],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
]
}