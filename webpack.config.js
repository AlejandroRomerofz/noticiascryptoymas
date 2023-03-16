const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    entry : "./src/script/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname, "public/script")
    },
    plugins : [new MiniCssExtractPlugin({filename : "../style/bundle.css"})],
    module : {
        rules : [{
                test : /\.(c|sc|sa)ss$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ] 
            }
        ]
    },
    mode : "development"
}

module.exports = config