import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import router from "./router"

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import VueLazyload from "vue-lazyload"
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: "../static/img/loading.gif"
})

window.EventHub = new Vue();
// import "./mock"


new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})