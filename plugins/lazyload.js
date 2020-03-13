import Vue from 'vue'
import Lazyload from 'vue-lazyload'

if (process.client) {
  Vue.use(Lazyload, {
    preLoad: 1.3,
    loading: '/loading.gif',
    error: '/load-error.png',
    attempt: 1,
    listenEvents: ['scroll']
  })
}
