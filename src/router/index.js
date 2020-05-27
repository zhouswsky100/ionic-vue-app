import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
const layout = () => import('@/page/layout');
const home = () => import('@/page/home');
const me = () => import('@/page/me');
const about = () => import('@/page/about');
Vue.use(IonicVueRouter)

export default new IonicVueRouter({
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
  })
