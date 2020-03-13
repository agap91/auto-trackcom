import Vue from 'vue'
import Shinomontaj from '../components/services/Shinomontaj.vue'
import RemontTyagachej from '../components/services/RemontTyagachej.vue'
import RemontPolupritsepov from '../components/services/RemontPolupritsepov.vue'
import Diagnostika from '../components/services/Diagnostika.vue'
import TotalServices from '../components/TotalServices.vue'

Vue.component(Shinomontaj.name, Shinomontaj)
Vue.component(RemontTyagachej.name, RemontTyagachej)
Vue.component(Diagnostika.name, Diagnostika)
Vue.component(RemontPolupritsepov.name, RemontPolupritsepov)
Vue.component(TotalServices.name, TotalServices)
