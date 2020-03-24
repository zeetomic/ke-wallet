export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:"https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" ,rel:"preload" ,as:"style" ,onload:"this.onload=null;this.rel='stylesheet'" },
      { href:"https://use.fontawesome.com/releases/v5.0.13/css/all.css", rel:"preload" ,as:"style" ,onload:"this.onload=null;this.rel='stylesheet'" }
    ]
  },
  env: {
    KEUrl: 'https://testnet-api.zeetomic.com/ke/v1',
    apiUrl: 'https://testnet-api.zeetomic.com/pub/v1'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#79c4ff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-qr', ssr: false },
    { src: '~/plugins/vue-qrcode-reader', ssr: false },
    { src: '~/plugins/chart', ssr:false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
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
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
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