import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {layout: 'common'}
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test.vue'),
        meta: {layout: 'common'}
    },
    {
        path: '/study',
        name: 'study',
        component: () => import('../views/Study.vue'),
        meta: {layout: 'common'}
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/List.vue'),
        meta: {layout: 'common'}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {layout: 'empty'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
