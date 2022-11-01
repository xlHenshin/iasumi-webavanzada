import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import CreateView from '../views/CreateView.vue'
import SingInView from '../views/SignInView.vue'
import SingUpView from '../views/SignUpView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/AboutView.vue')
        },
        {
            path: '/details/:productId',
            name: 'detail',
            component: DetailView
        },
        {
            path: '/create',
            name: 'create',
            component: CreateView
        },
        {
            path: '/sign-in',
            name: 'signIn',
            component: SingInView
        },
        {
            path: '/sign-up',
            name: 'signUp',
            component: SingUpView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        },
    ]
})

export default router