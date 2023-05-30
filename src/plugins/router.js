import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", name: "home", component: () => import("@/views/home.vue") },
  {
    path: "products",
    name: "products",
    component: () => import("@/views/products.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/views/product.vue"),
  },
  {
    path: "/feedbacks",
    name: "feedbacks",
    component: () => import("@/views/feedbacks.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/cart.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/privacy.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
