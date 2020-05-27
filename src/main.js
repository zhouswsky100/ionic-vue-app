import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import App from './App';
import axios from 'axios';
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./common/icon', false, /\.svg$/)
requireAll(req)

// 全局注册icon-svg
Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
