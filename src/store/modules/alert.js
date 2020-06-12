const state = {
  showAlert: null,
};

const getters = {
  showAlert: (state) => state.showAlert,
};

const actions = {
  setAlert({ commit }, msg) {
    commit('SET_ALERT', { msg: msg });
    setTimeout(() => {
      commit('REMOVE_ALERT');
    }, 5000);
  },
};

const mutations = {
  SET_ALERT: (state, data) => (state.showAlert = data),
  REMOVE_ALERT: (state) => (state.showAlert = null),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
