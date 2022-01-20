import { createStore } from "vuex";
import applications from "./modules/applications";
import departments from "./modules/departments";

export default createStore({
  state: {
    loadingStatus: false,
    modal: "close",
  },
  getters: {
    getLoadingStatus: (state) => state.loadingStatus,
    getModal: (state) => state.modal,
  },
  mutations: {
    setLoadingStatus(state, status) {
      state.loadingStatus = status;
    },
    setModal(state, modal) {
      state.modal = modal;
    },
  },
  modules: { applications, departments },
});
