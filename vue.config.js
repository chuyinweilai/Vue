module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://testwx.taoraise.com',
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}