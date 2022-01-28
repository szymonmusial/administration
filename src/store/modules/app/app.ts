import { App, AppState, modalType } from "./appTypes";

const app: App = {
  state: {
    loadingStatus: true,
    modal: modalType.close,
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
};

export default app;
