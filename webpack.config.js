const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack');

const PugPlugin = require('pug-plugin');

const pugEntries = {
  // 'header': 'src/UI-kit/headers-footers/header/header',
  // 'footer': 'src/UI-kit/headers-footers/footer/footer',
  'form-elements': 'src/UI-kit/form-elements/form-elements',
  'cards': 'src/UI-kit/cards/cards',
  'headers-footers': 'src/UI-kit/headers-footers/headers-footers',
  'landing-page': 'src/pages/landing-page/landing-page',
  // 'colors-type': 'src/UI-kit/colors-type/colors-type',
}

const htmlTemplates = Object.entries(pugEntries).map( entry => {
      return new HtmlWebpackPlugin({
      template: `${entry[1]}.pug`,
      chunks: [entry[0]],
      // chunks: [entry[0], "assets/shared"],
      filename: `${entry[0]}/index.html`,
  }) 
})

module.exports ={
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
              },
    mode,
    // entry: path.resolve(__dirname, 'src/UI-kit/headers-footers/header', 'index.js'),
    entry: {
      'form-elements': './src/UI-kit/form-elements/form-elements.js',
      'cards': './src/UI-kit/cards/cards.js',
      'headers-footers': './src/UI-kit/headers-footers/headers-footers.js',
      'landing-page': './src/pages/landing-page/landing-page.js',
 
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/[name].[contenthash].js',
        clean: true,
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
          // {
          //   test: /.pug$/,
          //   loader: PugPlugin.loader, // Pug loader
          // },
          {
          test: /.pug$/,
          loader: 'simple-pug-loader'
          },
          {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: path.join('images', '[name].[contenthash][ext]')
          }
          },
          {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: path.join('fonts', '[name].[contenthash][ext]')
          }
          },
          {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: path.join('icons', '[name].[contenthash][ext]')
          }
          },
        ],
      },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]/[name].[contenthash].css'
      }),
      // working
      ...htmlTemplates,
      // svg sprite
]
}