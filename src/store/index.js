import Vuex from 'vuex';
import Vue from 'vue';
import github from './modules/github';
import alert from './modules/alert';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    github,
    alert,
  },
});
