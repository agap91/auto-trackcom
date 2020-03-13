module.exports = {
  plugins: [
    { src: '~plugins/maskedInput', mode: 'client' },
    { src: '~plugins/mobileDetect', mode: 'client' },
    { src: '~plugins/lazyload', mode: 'client' },
    { src: '~plugins/scrollto', mode: 'client' },
    { src: '~plugins/services', mode: 'client' },
    { src: '~plugins/yandexMap', mode: 'client' }
  ],
  /*
   ** Headers of the page
   */
  head: {
    title:
      'Автосервис Auto Trackcom - ремонт легкового и коммерческого транспорта',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: '/img/logo-m.jpg' }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
