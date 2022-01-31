import axiosClient from "@/agent/axiosClient";
import { User, UsersState } from "./usersType";

const users: UsersState = {
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
    checkUsersAreInTheStore: (state) => !!state.users.length,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    setUsers(context) {
      return axiosClient.get("users").then((response) => {
        context.commit("setUsers", response.data);
      });
    },
  },
};

export default users;
