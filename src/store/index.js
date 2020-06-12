import Vuex from 'vuex';
import Vue from 'vue';
import github from './modules/github';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    github,
  },
});
