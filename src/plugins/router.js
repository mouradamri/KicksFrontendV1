import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", name: "home", component: () => import("@/views/home.vue") },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile.vue"),
  },
  {
    path: "/products",
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
    path: "/preorder",
    name: "preorder",
    component: () => import("@/views/preorder.vue"),
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
    path: "/privacy-policy",
    name: "privacy",
    component: () => import("@/views/privacy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "terms",
    component: () => import("@/views/terms.vue"),
  },
  {
    path: "/returns-refunds",
    name: "returns",
    component: () => import("@/views/refunds.vue"),
  },
  {
    path: "/shipping",
    name: "shipping",
    component: () => import("@/views/shipping.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
