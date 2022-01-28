export type Application = {
  application_type: string;
  department: string;
  event_date: string | Date;
  filing_date: string | Date;
  id: number | undefined;
  name: string;
  person: string;
  person_id: number;
  priority: boolean;
  reference_number: string;
  subscriptionList: Array<string>;
};

export type Applications = Array<Application>;

export interface ApplicationsState {
  applications: Applications;
}

// ============= ACTION NAMES ==============
// Getters
const getters = {
  getApplications: "getApplication",
  getApplication: "getApplication",
};

// Mutations
const commit = {
  setApplications: "setApplications",
  setApplication: "setApplication",
  addApplication: "addApplication",
};

// Actions
const dispatch = {
  setApplications: "setApplications",
  setApplication: "setApplication",
  addApplication: "addApplication",
  editApplication: "editApplication",
};

export const applicationStore = {
  getters,
  commit,
  dispatch,
};
