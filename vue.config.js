module.exports = {
    publicPath: './',
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        port: 8080
    },
    // css: {
    //     loaderOptions: {
    //         less: {
    //             modifyVars: {
    //                 'primary-color': '#EC4899',
    //                 'link-color': '#EC4899',
    //             },
    //             javascriptEnabled: true
    //         }
    //     }
    // }
}