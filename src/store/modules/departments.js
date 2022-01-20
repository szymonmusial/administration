import axiosClient from "../../agent/axiosClient.js";

const departments = {
  state: {
    departments: [],
  },
  getters: {
    getDepartments: (state) => state.departments,
  },
  mutations: {
    setDepartments(state, departments) {
      state.departments = departments;
    },
  },
  actions: {
    setDepartments(context) {
      return axiosClient.get("departments").then((response) => {
        context.commit("setDepartments", response.data);
      });
    },
  },
};

export default departments;
