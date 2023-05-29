import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", name: "home", component: () => import("@/views/home.vue") },
  { path: "/shop", name: "shop", component: () => import("@/views/shop.vue") },
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
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
