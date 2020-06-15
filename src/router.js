import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import List from './views/List'
import i18n from './languages/i18n'
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
            path:'/',
            redirect: `/${i18n.locale}`
        },
       {  
          path: '/:lang',
          component:{
              render (c) {return c('router-view')}
          },
          children: [
            {
                path: '/',
                name: 'Login',
                component: Login,
            },
            {
                path: '/:lang/todolist',
                name: 'List',
                component: List,
            }
          ]
        }
    ]
})
