import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/about'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 300)
        })
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
    ]
})
