import axiosClient from "../../agent/axiosClient.js";
import { setCoockie, getCookie } from "../../infrastructure/coockie";
import jwt_decode from "jwt-decode";

const token = {
  state: {
    auth: [],
  },
  getters: {},
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
  },
  actions: {
    getToken(context, id) {
      return axiosClient.get("tokens/" + id).then((response) => {
        setCoockie("token", response.data.token);
      });
    },
    signIn(context) {
      context.dispatch("getToken", 0).then(() => {
        const token = getCookie("token");
        context.commit("setAuth", jwt_decode(token));
      });
    },
  },
};

export default token;
