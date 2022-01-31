import axiosClient from "@/agent/axiosClient";
import { StoreDepartments } from "./departmentsType";

const departments = {
  state: {
    departments: [],
  },
  getters: {
    getDepartments: (state) => state.departments,
    checkDepartmentsAreInTheStore: (state) => !!state.departments.length,
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
