var Webpack = require('webpack');

module.exports = {
    entry: './src/render.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    plugins: [
    new Webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}