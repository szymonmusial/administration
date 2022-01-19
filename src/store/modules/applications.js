import axiosClient from "../../agent/axiosClient.js";

const applications = {
  state: {
    applications: [],
  },
  getters: {
    getApplications: (state) => state.applications,
  },
  mutations: {
    setApplications(state, applications) {
      state.applications = applications;
    },
  },
  actions: {
    setApplications(context) {
      return axiosClient.get("applications").then((response) => {
        context.commit("setApplications", response.data);
      });
    },
  },
};

export default applications;
