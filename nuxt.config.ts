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
    'nuxt-swiper',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/libs/fontawesome/css/all.min.css',
    '@/assets/libs/bootstrap/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      apiURL: '' //overridden by NUXT_PUBLIC_API_URL environment variable
    }
  },


})