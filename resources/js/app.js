require('./bootstrap');

import Vue from 'vue'
import router from './routes'
import Element from 'element-ui'
import Home from './views/home'

Vue.use(Element)

new Vue({
    el : '#app',
    router,
    render: h => h(Home),
})
