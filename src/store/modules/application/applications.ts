import axiosClient from "@/agent/axiosClient";
import { Application, Applications, ApplicationsState, applicationStore } from "./applicationType";

const state: ApplicationsState = {
  applications: [],
};

const applications = {
  state,
  getters: {
    checkApplicationsAreInTheStore: (state: ApplicationsState) => !!state.applications.length,
    getApplications: (state: ApplicationsState) => state.applications,
    getApplication: (state: ApplicationsState) => (id: number) => {
      return state.applications.find((item) => item.id === id);
    },
  },
  mutations: {
    setApplications(state: ApplicationsState, applications: Applications) {
      state.applications = applications;
    },
    setApplication(state: ApplicationsState, application: Application) {
      const index = state.applications.findIndex((item) => item.id == application.id);
      state.applications[index] = application;
    },
    addApplication(state: ApplicationsState, application: Application) {
      state.applications.push(application);
    },
  },
  actions: {
    setApplications(context) {
      return axiosClient
        .get("applications")
        .then((response) => {
          context.commit(applicationStore.commit.setApplications, response.data);
        })
        .finally(() => {
          context.commit("setLoadingStatus", true);
        });
    },
    setApplication(context, id: number) {
      return axiosClient.get("applications/" + id).then((response) => {
        context.commit(applicationStore.commit.setApplication, response.data);
      });
    },
    addApplication: (context, application: Application) => {
      return axiosClient.post("applications", application).then((response) => {
        context.commit(applicationStore.commit.addApplication, response.data);
      });
    },
    editApplication: (context, application: Application) => {
      return axiosClient
        .patch("applications/" + application.id, application)
        .then(() => {
          context.dispatch(applicationStore.commit.setApplication, application.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default applications;
