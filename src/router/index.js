import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'https://xhacer.tk/api';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('default_auth_token');
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

Vue.router = new VueRouter({
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({x: 0, y: 0}),
  routes,
});

export default Vue.router;
