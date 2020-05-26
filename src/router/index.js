import Vue from 'vue'
import Router from 'vue-router'
const layout = () => import('@/page/layout');
const home = () => import('@/page/home');
const me = () => import('@/page/me');
const about = () => import('@/page/about');
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: layout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: home
                },
                {
                    path: '/home',
                    name: 'home',
                    component: home
                },
                {
                    path: '/about',
                    name: 'about',
                    component: about
                },
                {
                    path: '/me',
                    name: 'me',
                    component: me
                }
            ]
        }
    ]
});
