import axiosClient from "@/agent/axiosClient";

const users /*: UsersState*/ = {
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
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
