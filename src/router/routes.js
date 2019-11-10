import Login from "../pages/Login";
import Home from "../pages/Home";

export default [

  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  }
];
