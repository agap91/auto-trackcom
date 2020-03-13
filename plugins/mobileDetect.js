import Vue from 'vue'
import mobileDeviceDetect from 'mobile-device-detect'

if (process.client) {
  Vue.use(mobileDeviceDetect)
}
