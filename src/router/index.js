import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/vHome.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/checker", component: () => import("@/views/vChecker.vue") },
  { path: "/converter", component: () => import("@/views/vConverter.vue") },
  { path: "/generator", component: () => import("@/views/vGenerator.vue") },
  { path: "/:pathMatch(.*)*", component: () => import("@/views/404.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
