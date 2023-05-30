import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/static/home.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/dynamic/products.vue"),
  },
  {
    path: "/feedbacks",
    name: "feedbacks",
    component: () => import("@/views/dynamic/feedbacks.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/static/about.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/static/contact.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/dynamic/cart.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/dynamic/search.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy",
    component: () => import("@/views/static/privacy.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
