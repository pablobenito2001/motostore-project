import { createRouter ,createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/products/:product',
            component: () => import('../views/Product.vue')
        },
        {
            path: '/products',
            component: () => import('../views/Products.vue')
        },
        {
            path: '/cart',
            component: () => import('../views/ShopCart.vue')
        },
        {
            path: '/exclusive',
            component: () => import('../views/Exclusive.vue')
        },
        {
            path: '/stores',
            component: () => import('../views/Stores.vue') 
        }
    ]
})