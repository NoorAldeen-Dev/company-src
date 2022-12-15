const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry:"./src/js/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
        assetModuleFilename: "images/[name][ext]"
      },
      devServer:{
        static: {

            directory: path.join(__dirname, 'build'),
    
        },
        port:1000,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
    },
      module: {      
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource'
          },
          {

            test: /\.html$/i,

            loader: 'html-loader',
            

          },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/projects.html",
          filename:"projects.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/project-details.html",
          filename:"project-details.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/blog.html",
          filename:"blog.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/blog-details.html",
          filename:"blog-details.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/add-blog.html",
          filename:"add-blog.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/about.html",
          filename:"about.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/contact.html",
          filename:"contact.html",
        }),
        new MiniCssExtractPlugin({
            filename:"css/style.css"
        }),
  ],
};