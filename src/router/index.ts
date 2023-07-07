import {createRouter, createWebHistory} from 'vue-router'
import RouterDestinations from "@/router/RouterDestinations";

const routes = [
  {path: '/', component: () => import('@/views/HomeView.vue'), name: RouterDestinations.HOME},
  {path: '/calculator', component: () => import('@/views/CalculatorView.vue'), name: RouterDestinations.CALCULATOR}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
