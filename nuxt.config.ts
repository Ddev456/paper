// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v5',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60, // 14 jours
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    }
  }
})
