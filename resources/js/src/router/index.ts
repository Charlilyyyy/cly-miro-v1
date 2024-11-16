import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/app'),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/auth/LoginPage.vue')
        }
    ]
})

export default router
