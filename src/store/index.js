import { createStore } from "vuex";
import applications from "./modules/applications";
import departments from "./modules/departments";
import users from "./modules/users";
import applicationType from "./modules/applicationType";
import auth from "./modules/auth";

export default createStore({
  state: {
    loadingStatus: true,
    modal: "close",
    editingApplicationId: null,
  },
  getters: {
    getLoadingStatus: (state) => state.loadingStatus,
    getModal: (state) => state.modal,
    getEditingApplicationId: (state) => state.editingApplicationId,
  },
  mutations: {
    setLoadingStatus(state, status) {
      state.loadingStatus = status;
    },
    setModal(state, modal) {
      state.modal = modal;
    },
    setEditingApplicationId(state, id) {
      state.editingApplicationId = id;
    },
  },
  modules: { applications, departments, users, applicationType, auth },
});
