import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/page/Index');
const Me = () => import('@/page/Me');
const About = () => import('@/page/About');
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            redirect: 'Index',
            children: [
                {
                    path: '/Me',
                    name: 'Me',
                    component: Me
                },
                {
                    path: '/Index',
                    name: 'Index',
                    component: Index
                },
                {
                    path: '/About',
                    name: 'About',
                    component: About
                }
            ]
        }
    ]
});
