export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'atc-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/MixinsCommons.js',
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css'
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'paginas1a@gmail.com',
      },
      smtp: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'paginas1a@gmail.com',
          pass: '$60D41W4y$w!THm3$!B13$$3d!2'
        },
      },
    }]
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost/atc-wp/graphql',
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
