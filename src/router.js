import {
    createWebHistory,
    createRouter
} from "vue-router";

const Home = () => import('./views/Home.vue')
// const About = () => import('./views/About.vue')




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, alias: '/vue-vite-router'
        },
        {
            path: "/home",
            component: Home,
        },
        // {
        //     path: "/about",
        //     component: About,
        // },
        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound
        // }
    ]

})

export default router;