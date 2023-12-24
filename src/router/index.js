import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '../views/WorkView.vue'

const routes = [
  {
    path: '/',
    name: 'work',
    component: WorkView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ideas',
    name: 'ideas',
    component: () => import('../views/IdeasView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
