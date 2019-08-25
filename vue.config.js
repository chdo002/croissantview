// vue.config.js
module.exports = {
    // 选项...
    configureWebpack: {
        extrernals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios',
        }
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