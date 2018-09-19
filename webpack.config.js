const path = require('path')
const MyPlugin = require('./plugins/myplugin-4.js')

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: path.resolve('./loaders/index.js'),
                options: {
                    test: 1
                }
            }
        }]
    },
    plugins: [
        new MyPlugin({
            test:1
        })
    ]
}