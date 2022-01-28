import { createStore } from "vuex";
import applications from "./modules/application/applications";
import departments from "./modules/departments";
import users from "./modules/users";
import applicationType from "./modules/application/applicationEnum";
import auth from "./modules/auth/auth";
import app from "./modules/app/app";

export default createStore({
  modules: {
    applications,
    departments,
    users,
    applicationType,
    auth,
    app,
  },
});
