export type User = {
  name: string;
  id: number;
};

export type Users = Array<User>;

export type UserInternalState = {
  users: User[];
};

export type UsersState = {
  state: UserInternalState;
  getters: {
    getUsers: (state: UserInternalState) => Users;
    checkUsersAreInTheStore: (state: UserInternalState) => boolean;
  };
  mutations: {
    setUsers(state: UserInternalState, users: Users): void;
  };
  actions: {
    setUsers(context: any): Promise<void>;
  };
};
