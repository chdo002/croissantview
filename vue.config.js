// vue.config.js
module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "~@/style/variables.scss";
                `,
            },
        },
    }
};