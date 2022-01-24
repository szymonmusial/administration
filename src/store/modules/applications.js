import axiosClient from "../../agent/axiosClient.js";

const applications = {
  state: {
    applications: [],
  },
  getters: {
    getApplications: (state) => state.applications,
    getApplication: (state) => (id) => {
      return state.applications.find((item) => item.id === id);
    },
  },
  mutations: {
    setApplications(state, applications) {
      state.applications = applications;
    },
    setApplication(state, application) {
      let index = state.applications.findIndex(
        (item) => item.id == application.id
      );
      state.applications[index] = application;
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
    setApplication(context, id) {
      return axiosClient.get("applications/" + id).then((response) => {
        context.commit("setApplication", response.data);
      });
    },
    addApplication: (context, application) => {
      return axiosClient.post("applications", application).then((response) => {
        context.commit("addApplication", response.data);
      });
    },
    editApplication: (context, application) => {
      console.log(application);
      return axiosClient
        .patch("applications/" + application.id, application)
        .then(() => {
          context.dispatch("setApplication", application.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default applications;
