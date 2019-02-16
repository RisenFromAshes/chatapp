const webpack = require('webpack')
module.exports = {
   mode: "development",
   devtool: "inline-source-map",
    entry: "./src/client/index.tsx",
    output: {
      filename: "public/js/bundle.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
            test: /\.tsx?$/,
            //exclude: [/\.js$/, /\.html$/, /\.json$/, /\.ejs$/],
            loader: "ts-loader"
        }
      ]
    },
    plugins:[      
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(true)
      })
    ]
  };