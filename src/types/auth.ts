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
  setToken: Object;
  postLogins: Object;
  setAuth: Object;
  signIn: Object;
  signOut: Object;
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
  setAuth: Object;
};

export const authCommit: AuthCommit = {
  setAuth: "setAuth",
};

// Getters
export type AuthGetters = {
  getAuth: Object;
  getUserInfo: Object;
  getPermissions: Object;
  checkPermission: Object;
  checkAuth: Object;
};

export const authGetters: AuthGetters = {
  getAuth: "getAuth",
  getUserInfo: "getUserInfo",
  getPermissions: "getPermissions",
  checkPermission: "checkPermission",
  checkAuth: "checkAuth",
};
