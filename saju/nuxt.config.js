export default {
    ssr:true,
    loading: false,
    target:'server',
    mode: 'universal',
    modules: ['@nuxtjs/axios', '@nuxtjs/universal-storage'],
    css: ['~/assets/scss/ets_common.scss'],
    head: {
        title: '사주',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'https://img.etoos.com/teacher/event/2018/04/pmo_00/favicon.ico',
            },
        ],
    },
    //buildModules: ['@nuxtjs/eslint-module'],
    build: {
        hotMiddleware: {
            client: { overlay: false },
        },
        analyze: false,
        extend(config, { isClient, isServer, isDev }) {
            if (isServer && !isDev) {
                config.devtool = 'hidden-source-map'
            }
            // console.log('webpack', config, isServer, isClient)
        },
    },
}
