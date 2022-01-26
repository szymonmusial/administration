import axiosClient from "../../agent/axiosClient.js";
import {
  setTokenToCookie,
  getTokenFromCookie,
} from "../../infrastructure/coockie";
import jwt_decode from "jwt-decode";

const token = {
  state: {
    auth: [],
  },
  getters: {
    getAuth: (state) => state.auth,
    getPermissions: (state) => state.auth.Permissions,
    checkPermission: (state) => (permission) => {
      try {
        return state.auth.Permissions.includes(permission);
      } catch (e) {
        return false;
      }
    },
    checkAuth: (state) => state.auth !== [],
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
  },
  actions: {
    setToken(context, id) {
      return axiosClient.get("tokens/" + id).then((response) => {
        setTokenToCookie(response.data.token);
      });
    },
    postLogins(context, logins) {
      return axiosClient.post("auth/", logins);
    },
    setAuth(context) {
      const token = getTokenFromCookie();
      if (token) {
        const p = jwt_decode(token);
        return context.commit("setAuth", p);
      } else {
        return Promise.reject(() => "Token do not exist");
      }
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
