import Vue from 'vue'
import MaskedInput from 'vue-masked-input'

if (process.client) {
  Vue.use(MaskedInput)
  Vue.component('masked-input', MaskedInput)
}
