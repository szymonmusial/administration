export type App = {
  state: AppState;
  getters: {
    getLoadingStatus: (state: AppState) => boolean;
    getModal: (state: AppState) => string;
    getEditingApplicationId: (state: AppState) => null | number;
  };
  mutations: {
    setLoadingStatus(state: AppState, status: boolean): void;
    setModal(state: AppState, modal: string): void;
    setEditingApplicationId(state: AppState, id: number | number): void;
  };
};

export type AppState = {
  loadingStatus: boolean;
  modal: string;
  editingApplicationId: null | number;
};
// ============= ACTION NAMES ==============

// Mutations
const commit = {
  setLoadingStatus: "setLoadingStatus",
  setModal: "setModal",
  setEditingApplicationId: "setEditingApplicationId",
};

export const appStore = {
  commit,
};

// ============= ENUMS ==============

export enum modalType {
  add = "add",
  close = "close",
  basicEdit = "basicEdit",
  dateEdit = "dateEdit",
  personEdit = "personEdit",
}
