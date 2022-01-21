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
    addApplication(state, application) {
      state.applications.push(application);
    },
  },
  actions: {
    setApplications(context) {
      return axiosClient.get("applications").then((response) => {
        context.commit("setApplications", response.data);
      });
    },
    addApplication: (context, application) => {
      return axiosClient.post("applications", application).then((response) => {
        context.commit("addApplication", response.data);
      });
    },
  },
};

export default applications;
