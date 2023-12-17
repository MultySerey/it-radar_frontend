// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      title: "IT радар"
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  }
})
