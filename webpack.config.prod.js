
//imports
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//export
module.exports = {
    mode: 'production',
    //which entry point to startthe reading
    entry: "./src/index.js",
    // configuration of the output
    output: {
        // using the path import, we set the path of the bundle
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: ""
    },
    /* 
        Here we set our source maps, which basically
        means the mapping of the code in our browser,
        so in inspection mode we can debug the bug in 
        the original format and not in the optimized
        bundled code
    */
   devtool: 'none',
   module:{
        rules: [
            //tell babel to look and compile all js files
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            //css rules:
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    // additional configuration on css loaders to accept css modules
                    {loader: 'css-loader', options: {
                        importLoaders: 1,
                        //configuration on unique class names generation
                        modules:{
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    }},
                    // automatic prefix for browser support
                    {loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        //execute the plugin I want to run over my css code
                        plugins: () => [autoprefixer()]
                        }
                    }
                ]
            },
            //image support
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader?limit=8000&name=images/[name].[ext]"
            }
        ]
   },
   plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body'
    })
   ]
};