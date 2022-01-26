import { createRouter, createWebHistory } from "vue-router";
import Applications from "../views/Applications.vue";
import AddNewApplication from "../views/AddNewApplication.vue";
import SignIn from "../views/SignIn.vue";

import store from "../store";

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
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// it's good idea keep it in this place?

router.beforeEach((to, from, next) => {
  console.log(store.getters.getAuth);
  next();
});
export default router;
