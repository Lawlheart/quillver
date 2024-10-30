import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/MainPage.vue')
  },
  {
    path: '/persona-4-golden-guide',
    name: 'Persona',
    component: () => import('./../pens/persona-4-golden-guide/src/script.vue')
  },
  {
    path: '/poketcgplayground',
    name: 'PokeTCG',
    component: () => import('./../pens/poketcgplayground/src/script.vue')
  },
  {
    path: '/hydra-prime',
    name: 'Hydra Prime',
    component: () => import('./../pens/hydra-prime/src/script.vue')
  },
  {
    path: '/eureka',
    name: 'Eureka',
    component: () => import('./../pens/eureka/src/script.vue')
  },
  // New Pens get added here to routing
  // {
  //   path: '/new-pen',
  //   name: 'New Pen',
  //   component: () => import('./../pens/new-pen/src/script.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router