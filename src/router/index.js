// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Map from '../components/Map.vue';
import RouteOptions from '../components/RouteOptions.vue';
import UserPreferences from '../components/UserPreferences.vue';
import UserProfile from '../components/UserProfile.vue';
import Settings from '../components/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: Map,
    },
    {
      path: '/route-options',
      name: 'routeOptions',
      component: RouteOptions,
    },
    {
      path: '/user-preferences',
      name: 'userPreferences',
      component: UserPreferences,
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: UserProfile,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});