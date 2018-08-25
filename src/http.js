import Vue from 'vue'
import axios from 'axios'
axios.defaults.timeout = 12000
axios.defaults.baseURL = 'https://interface.meiriyiwen.com'
axios.interceptors.response.use(data => {
    if (data.status == 200)
        return data.data
}, error => {
    return Promise.reject(error)
})
Vue.prototype.$axios = axios