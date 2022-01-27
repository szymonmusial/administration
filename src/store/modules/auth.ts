import axiosClient from "@/agent/axiosClient";
import { setTokenToCookie, getTokenFromCookie, removeTokenFromCookie } from "../../infrastructure/coockie";
import jwt_decode from "jwt-decode";

import { AuthState, UserInfo, Permissions, Auth, Logins, authDispatch, authCommit } from "@/types/auth";

const state: AuthState = {
  auth: {
    FirstName: "",
    LastName: "",
    Job: "",
    Id: null,
    Name: "",
    Permissions: [],
  },
};

const token = {
  state,
  getters: {
    getAuth: (state: AuthState): UserInfo => state.auth,
    getUserInfo: (state: AuthState): UserInfo => {
      const userInfo = {
        FirstName: state.auth.FirstName,
        LastName: state.auth.LastName,
        Job: state.auth.Job,
        Id: state.auth.Id,
        Name: state.auth.FirstName + " " + state.auth.LastName,
      };
      return userInfo;
    },
    getPermissions: (state: AuthState): Permissions => state.auth.Permissions,
    checkPermission:
      (state: AuthState) =>
      (permission: string): boolean => {
        try {
          return state.auth.Permissions.includes(permission);
        } catch (e) {
          return false;
        }
      },
    checkAuth: (state: AuthState): boolean => state.auth.Permissions !== undefined,
  },
  mutations: {
    setAuth(state: AuthState, auth: Auth) {
      state.auth = auth;
    },
  },
  actions: {
    setToken(context, id: number) {
      return axiosClient.get("tokens/" + id).then((response) => {
        setTokenToCookie(response.data.token);
      });
    },
    postLogins(context, logins: Logins) {
      return axiosClient.post("auth/", logins);
    },
    setAuth(context) {
      const token = getTokenFromCookie();
      if (token) {
        const tokenDecode: Auth = jwt_decode(token);
        return context.commit("setAuth", tokenDecode);
      } else {
        return Promise.reject(() => "Token do not exist");
      }
    },
    signIn(context, logins: Logins) {
      return context
        .dispatch("postLogins", logins)
        .then(() => context.dispatch("setToken", 0).then(() => context.dispatch("setAuth")));
    },
    signOut(context) {
      removeTokenFromCookie();
      context.commit(authCommit.setAuth, {});
    },
  },
};

export default token;
