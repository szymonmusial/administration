import axiosClient from "../../agent/axiosClient.js";

const token = {
  state: {
    auth: [],
  },
  getters: {},
  mutations: {},
  actions: {
    getToken(context, id) {
      return axiosClient.get("tokens/" + id).then((response) => {
        console.log(response.data.token);
      });
    },
    signIn(context) {
      context.dispatch("getToken", 0);
    },
  },
};

export default token;
