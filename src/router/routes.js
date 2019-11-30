import Login from "../pages/Login";
import Home from "../pages/Home";
import Combustible from "../pages/settings/Combustible";
import Carrocerias from "../pages/settings/Carrocerias";
import Radios from "../pages/settings/Radios";
import Nivel from "../pages/settings/Nivel";
import Empresa from "../pages/Empresa";

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
  },
  {
    path: '/combustible',
    name: 'combustible',
    component: Combustible,
  },
  {
    path: '/carrocerias',
    name: 'carrocerias',
    component: Carrocerias,
  },
  {
    path: '/radios',
    name: 'radios',
    component: Radios,
  },
  {
    path: '/niveles',
    name: 'niveles',
    component: Nivel,
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: Empresa,
  }
];
