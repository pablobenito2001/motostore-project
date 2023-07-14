import { createRouter ,createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home/Home.vue')
        },
        {
            path: '/products/:product',
            component: () => import('../views/Product/Product.vue')
        },
        {
            path: '/products',
            component: () => import('../views/ProductsDashboard/ProductsDashboard.vue')
        },
        {
            path: '/cart',
            component: () => import('../views/Cart/Cart.vue')
        },
        {
            path: '/exclusive',
            component: () => import('../views/Exclusive/Exclusive.vue')
        }
    ]
})