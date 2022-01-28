import { createStore } from "vuex";
import applications from "./modules/application/applications";
import departments from "./modules/departments";
import users from "./modules/users";
import auth from "./modules/auth/auth";
import app from "./modules/app/app";

export default createStore({
  modules: {
    applications,
    departments,
    users,
    auth,
    app,
  },
});
