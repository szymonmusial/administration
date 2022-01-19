import { createStore } from "vuex";
import applications from "./modules/applications";

export default createStore({
  state: {
    loadingStatus: false,
  },
  getters: {
    getLoadingStatus: (state) => state.loadingStatus,
  },
  mutations: {
    setLoadingStatus(state, status) {
      state.loadingStatus = status;
    },
  },
  modules: { applications },
});
