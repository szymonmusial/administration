// State
export interface AuthState {
  auth: Auth;
}

export type Auth = {
  FirstName: string;
  LastName: string;
  Job: string;
  Id: number | null;
  Name: string;
  Permissions: Permissions;
  exp: number | null;
};

export type Permissions = Array<string>;

export type Logins = {
  login: string;
  password: string;
};

export type UserInfo = {
  FirstName: string;
  LastName: string;
  Job: string;
  Id: number | null;
  Name: string;
};

// ============= ACTION NAMES ==============
// Actions
export type AuthDispatch = {
  setToken: string;
  postLogins: string;
  setAuth: string;
  signIn: string;
  signOut: string;
};

export const authDispatch: AuthDispatch = {
  setToken: "setToken",
  postLogins: "postLogins",
  setAuth: "setAuth",
  signIn: "signIn",
  signOut: "signOut",
};

// Mutations
export type AuthCommit = {
  setAuth: string;
};

export const authCommit: AuthCommit = {
  setAuth: "setAuth",
};

// Getters
export type AuthGetters = {
  getAuth: string;
  getUserInfo: string;
  getPermissions: string;
  checkPermission: string;
  checkAuth: string;
};

export const authGetters: AuthGetters = {
  getAuth: "getAuth",
  getUserInfo: "getUserInfo",
  getPermissions: "getPermissions",
  checkPermission: "checkPermission",
  checkAuth: "checkAuth",
};
