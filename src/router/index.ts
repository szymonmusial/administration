import { createRouter, createWebHistory } from "vue-router";
import Applications from "../views/Applications.vue";
import AddNewApplication from "../views/AddNewApplication.vue";
import SignIn from "../views/SignIn.vue";
import { authenticated, canOpenApplicationInNewCard } from "../infrastructure/permission/usePermission";

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

router.beforeEach((to, from, next) => {
  const toName = to.name;
  console.error(authenticated());
  if (authenticated() || to.name === "SignIn") {
    switch (toName) {
      case "AddNewApplication":
        if (canOpenApplicationInNewCard()) {
          next();
        } else {
          next({ path: "/" });
        }
        break;
      default:
        next();
    }
  } else {
    next({ path: "/signin" });
  }
});

export default router;
