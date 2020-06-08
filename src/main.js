import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import storeOptions from './store/store'

Vue.use(Vuex)
const store = new Vuex.Store(storeOptions);

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})
