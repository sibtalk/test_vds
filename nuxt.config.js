export default {


  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RSK',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { hid: 'ckeditor', src: '/admin/libs/ckeditor/ckeditor.js' },
      // { src: '/admin/libs/ckfinder/ckfinder.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "@/assets/css/animate.min.css",
    // "@/assets/fontawesome/css/all.min.css",
    // "@/assets/css/tooltip.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/directive.client.js'
    // '@/plugins/vue-tooltip.js',
    // { src: '~/plugins/ckeditor.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  loading: { color: '#00ff1f',height: '3px' },
  // loading: 'components/ui/loading.vue',
  // Modules: https://go.nuxtjs.dev/config-modules #ffe400
  modules: [
    '@nuxtjs/axios',
    'nuxt-seo',
  ],

  // vuetify: {
  //   optionsPath: './vuetify.options.js',
  // },
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true,
    theme: {
      disable: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,

  },




}
