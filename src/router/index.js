import { createRouter, createWebHistory } from "vue-router";
import Applications from "../views/Applications.vue";
import AddNewApplication from "../views/AddNewApplication.vue";

const routes = [
  {
    path: "/",
    name: "Applications",
    component: Applications,
  },
  {
    path: "/add",
    name: "AddNewApplication",
    component: AddNewApplication,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
