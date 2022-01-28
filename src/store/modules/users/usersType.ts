type User = {
  name: string;
  id: number;
};

type Users = Array<User>;

type UsersState = {
  state: {
    users: Array<User>;
  };
  getters: {
    getUsers: (state: Users) => any;
  };
  mutations: {
    setUsers(state: Users, users: Users): void;
  };
  actions: {
    setUsers(context: any): Promise<void>;
  };
};
