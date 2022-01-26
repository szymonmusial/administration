import axiosClient from "../../agent/axiosClient.js";
import {
  setTokenToCookie,
  getTokenFromCookie,
} from "../../infrastructure/coockie";
import jwt_decode from "jwt-decode";

const token = {
  state: {
    auth: {},
  },
  getters: {
    getAuth: (state) => state.auth,
    getUserInfo: (state) => {
      const userInfo = {
        FirstName: state.auth.FirstName,
        LastName: state.auth.LastName,
        Job: state.auth.Job,
        Id: state.auth.Id,
        Name: state.auth.FirstName + " " + state.auth.LastName,
      };
      return userInfo;
    },
    getPermissions: (state) => state.auth.Permissions,
    checkPermission: (state) => (permission) => {
      try {
        return state.auth.Permissions.includes(permission);
      } catch (e) {
        return false;
      }
    },
    checkAuth: (state) => state.auth.Permissions !== undefined,
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
        const tokenDecode = jwt_decode(token);
        return context.commit("setAuth", tokenDecode);
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
