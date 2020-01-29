import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import SignIn from './views/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Home
    }
  ]
})
