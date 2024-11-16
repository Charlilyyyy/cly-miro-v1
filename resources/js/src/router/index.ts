import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/app'),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/auth/LoginPage.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../pages/admin/ProjectPage.vue')
        },
        {
            path: '/project-board',
            name: 'project-board',
            component: () => import('../pages/admin/ProjectBoardPage.vue')
        }
    ]
})

export default router
