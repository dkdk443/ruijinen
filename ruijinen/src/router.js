import Vue from 'vue'
import VueRouter from 'vue-router'
//コンポーネント読み込み
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
import About from '@/views/About.vue'
import Result from '@/views/Result.vue'
import Type from '@/views/Type.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/result',
        name: 'Result',
        component: Result
    },
    {
        path: '/type/:type',
        name: 'Type',
        component: Type
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router