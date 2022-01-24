const applicationTypes = {
  state: {
    applicationTypes: [
      { name: "Bank Pomysłów", id: 0 },
      { name: "Wniosek Ogólny", id: 1 },
      { name: "Zgłoszenie problemów", id: 2 },
    ],
  },
  getters: {
    getApplicationTypes: (state) => state.applicationTypes,
  },
  mutations: {
    setApplicationTypes(state, applicationTypes) {
      state.applicationTypes = applicationTypes;
    },
  },
};

export default applicationTypes;
