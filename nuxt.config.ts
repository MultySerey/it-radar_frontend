// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
