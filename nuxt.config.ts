// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ай про",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    'nuxt-swiper'
  ],
  css: [
    '@/assets/libs/fontawesome/css/all.min.css',
    '@/assets/libs/bootstrap/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],
  // googleFonts: {
  //   families: {
  //     'Open+Sans': [300, 400, 500, 600],
  //     'Montserrat': [300, 400, 500, 600]
  //   },
  // },
  image: {
    dir: 'assets/img'
  }

})