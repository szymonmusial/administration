import axiosClient from "@/agent/axiosClient";
import { setTokenToCookie, getTokenFromCookie, removeTokenFromCookie } from "@/infrastructure/coockie";
import jwt_decode from "jwt-decode";

import {
  AuthState,
  UserInfo,
  Permissions,
  Auth,
  Logins,
  authDispatch,
  authCommit,
} from "@/store/modules/auth/authType";

const state: AuthState = {
  auth: {
    FirstName: "",
    LastName: "",
    Job: "",
    Id: null,
    Name: "",
    Permissions: [],
    exp: null,
  },
};

const token = {
  state,
  getters: {
    getAuth: (state: AuthState): UserInfo => state.auth,
    getExp: (state: AuthState): number | null => state.auth.exp,
    isTokenExpired: (state: AuthState): boolean => {
      if (state.auth.exp !== null) {
        return Date.now() <= state.auth.exp;
      } else {
        return false;
      }
    },
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
    checkAuth: (state: AuthState): boolean => {
      if (state.auth.Permissions === undefined) {
        return false;
      } else {
        return !!state.auth.Permissions.length;
      }
    },
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
        return context.commit(authCommit.setAuth, tokenDecode);
      } else {
        return Promise.reject(() => "Token do not exist");
      }
    },
    signIn(context, logins: Logins) {
      return context
        .dispatch("postLogins", logins)
        .then(() => context.dispatch(authDispatch.setToken, 0).then(() => context.dispatch(authDispatch.setAuth)));
    },
    signOut(context) {
      removeTokenFromCookie();
      context.commit(authCommit.setAuth, {});
    },
  },
};

export default token;
