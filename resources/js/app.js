require('./bootstrap');

import Vue from 'vue'
import Element from 'element-ui'
import Home from './views/home'

Vue.use(Element)

new Vue({
    el : '#app',
    render: h => h(Home),
})
