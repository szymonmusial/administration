export type User = {
  name: string;
  id: number;
};

type Users = Array<User>;

type UserInternalState = {
  users: User[];
};

export type UsersState = {
  state: UserInternalState;
  getters: {
    getUsers: (state: UserInternalState) => Users;
  };
  mutations: {
    setUsers(state: UserInternalState, users: Users): void;
  };
  actions: {
    setUsers(context: any): Promise<void>;
  };
};
