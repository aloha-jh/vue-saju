require('dotenv').config();
export default {
    ssr:true,
    loading: false,
    target:'static', //server
    mode: 'universal',
    router:{
        base:'/vue-saju/'
    },
    modules: ['@nuxtjs/axios', '@nuxtjs/universal-storage','@nuxtjs/dotenv'],
    axios:{
        baseURL:'https://apis.data.go.kr',
        https:true,
        headers: {
            'Permissions-Policy': 'interest-cohort=()', // interest-cohort 활성화
          },
    },
    css: ['~/assets/scss/ets_common.scss'],
    head: {
        title: '운정원',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],
        link: [
            {
                rel: 'icon',type: 'image/x-icon', src: '/favicon.ico',
                rel: 'icon',type: 'image/x-icon', src: '/favicon-32.png',
                rel: 'icon',type: 'image/x-icon', src: '/favicon-57.png',
                rel: 'icon',type: 'image/x-icon', src: '/favicon-60.png',
                rel: 'icon',type: 'image/x-icon', src: '/favicon-72.png',
            }, 
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
            }, 
        ],
    },
    //buildModules: ['@nuxtjs/eslint-module'],
    build: {
        hotMiddleware: {
            client: { overlay: false },
        },
        dir:'dist',
        analyze: false,
        extend(config, { isClient, isServer, isDev }) {
            if (isServer && !isDev) {
                config.devtool = 'hidden-source-map'
            }
            // console.log('webpack', config, isServer, isClient)
        },
    },
}
