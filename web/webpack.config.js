const path = require('path')

module.exports = {
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            }
          ]
        },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 ç”¨
        }
    }
}
