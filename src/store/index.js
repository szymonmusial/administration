import { createStore } from "vuex";
import applications from "./modules/applications";

export default createStore({
  modules: { applications },
});
