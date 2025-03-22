export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  // Стартовые SEO-настройки
  app: {
    head: {
      titleTemplate: '%s - pro/code',
      meta: [
        { name: 'description', content: 'Веб-студия pro/code — профессиональная разработка сайтов и веб-продуктов' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'pro/code' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  css: ['~/assets/css/main.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg-sprite', ['@nuxtjs/google-fonts', {
    families: {
      Inter: [400, 500, 600],
    }
  }]],
  googleFonts: {
    fontsDir: 'assets/fonts'
  }
})