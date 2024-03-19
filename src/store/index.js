// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import routes from './routes';
import map from './map';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    routes,
    map,
  },
});