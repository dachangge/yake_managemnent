import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = true


// 引入 store
import store from './store'

// 引入 axios
import axios from 'axios'
import './axios'


// 添加 主题色
import './assets/style/element/index.css'
// 引入 element-ui
const ElementUI = require('element-ui');
// 装载 element ui
Vue.use(ElementUI);

import CustomerButton from './components/customerButton/index'

Vue.use(CustomerButton);

Vue.prototype.$http = axios;


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
