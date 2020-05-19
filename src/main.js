import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import App from './App';
import {DatetimePlugin} from 'vux';
import axios from 'axios';
import IconSvg from '@/components/icon/icon';
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./common/icon', false, /\.svg$/)
requireAll(req)

// 全局注册icon-svg
Vue.component('icon-svg', IconSvg);
Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.use(DatetimePlugin);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
