import { createRouter, createWebHistory } from "vue-router";
import Applications from "../views/Applications.vue";

const routes = [
  {
    path: "/",
    name: "Applications",
    component: Applications,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
