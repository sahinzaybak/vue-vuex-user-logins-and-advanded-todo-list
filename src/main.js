import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import storeOptions from './store/store'
import 'vue-awesome/icons'
import i18n from './languages/i18n'

Vue.use(Vuex);
const store = new Vuex.Store(storeOptions);

router.beforeEach((to, from ,next) =>{
    let languages = to.params.lang;
    if(!languages)languages = 'tr'

    i18n.locale = languages
    next();
})

new Vue({
    router,
    i18n,
    store,
    el: '#app',
    render: h => h(App)
})
