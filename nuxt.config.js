export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  env: {
    KEUrl: 'https://testnet-api.zeetomic.com/ke/v1',
    apiUrl: 'https://testnet-api.zeetomic.com/pub/v1'
  },
  loading: { color: '#79c4ff' },
  css: [
  ],
  plugins: [
    { src: '~/plugins/vue-qr', ssr: false },
    { src: '~/plugins/vue-qrcode-reader', ssr: false },
    { src: '~/plugins/chart', ssr:false },
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-center',
    theme: "bubble", 
    duration: '3000',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
    }
  },
  build: {
    extend (config, ctx) {
    }
  },
  icon: {
    iconSrc: './assets/Logo-KE.png',
  },
  manifest: {
    short_name: 'KE Wallet',
    name: 'KE Wallet',
    start_url: '/',
    theme_color: '#ffffff',
  },
}