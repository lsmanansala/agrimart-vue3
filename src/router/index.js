import { createWebHistory, createRouter } from "vue-router";
import MainLayout from '../layouts/MainLayout.vue'
import About from "../pages/About.vue";

const routes = [
  {
    path: "/home",
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '/product-seeker',
        component: () => import('../pages/ProductSeeker.vue'),
      },
      {
        path: '/farmer',
        component: () => import('../pages/Farmer.vue'),
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import('../pages/About.vue'),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import('../pages/Shop.vue'),
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;