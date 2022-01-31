export type Department = {
  name: string;
  id: number;
};

export type Departments = Array<Department>;

export type DepartmentsState = {
  departments: Departments[];
};

export type StoreDepartments = {
  state: DepartmentsState;
  getters: {
    getDepartments: (state: DepartmentsState) => Departments;
  };
  mutations: {
    setDepartments(state: DepartmentsState, departments: Departments): void;
  };
  actions: {
    setDepartments(context: any): Promise<void>;
  };
};
