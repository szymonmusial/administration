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
    setToken(context, id) {
      return axiosClient.get("tokens/" + id).then((response) => {
        setCoockie("token", response.data.token);
      });
    },
    postLogins(context, logins) {
      return axiosClient.post("auth/", logins);
    },
    setAuth(context) {
      const token = getCookie("token");
      context.commit("setAuth", jwt_decode(token));
    },
    signIn(context, logins) {
      return context
        .dispatch("postLogins", logins)
        .then(() =>
          context
            .dispatch("setToken", 0)
            .then(() => context.dispatch("setAuth"))
        );
    },
  },
};

export default token;
