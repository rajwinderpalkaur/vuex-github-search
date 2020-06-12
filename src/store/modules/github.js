import axios from 'axios';
const state = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};
const getters = {
  allUsers: (state) => state.users,
  user: (state) => state.user,
  allRepos: (state) => state.repos,
  loading: (state) => state.loading,
};

const actions = {
  async searchUsers({ commit }, query = 'raj') {
    commit('SET_LOADING');
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    commit('SET_USERS', res.data.items);
  },
  async getUser({ commit }, login) {
    commit('SET_LOADING');
    const res = await axios.get(`https://api.github.com/users/${login}`);
    commit('SET_USER', res.data);
  },
  clearUser({ commit }) {
    commit('CLEAR_USER');
  },
  async getUserRepos({ commit }, login) {
    commit('SET_LOADING');
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
    );
    commit('GET_REPOS', res.data);
  },
};

const mutations = {
  SET_USERS: (state, users) => {
    state.users = users;
    state.loading = false;
  },
  SET_USER: (state, user) => {
    state.user = user;
    state.loading = false;
  },
  CLEAR_USER: (state) => {
    state.users = [];
  },
  GET_REPOS: (state, repos) => {
    state.repos = repos;
    state.loading = false;
  },
  SET_LOADING: (state) => {
    state.loading = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
