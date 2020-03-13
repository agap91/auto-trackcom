import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  lang: 'ru_RU',
  apiKey: 'ddf240b5-9d9f-4654-8e04-92102aae16e5',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, settings)
