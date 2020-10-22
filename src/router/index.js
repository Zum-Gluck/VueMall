import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('views/Home/Home');
const Classify = () => import('views/Classify/Classify');
const ShopCar = () => import('views/ShopCar/ShopCar');
const ProFile = () => import('views/ProFile/ProFile');

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/classify', component: Classify },
  { path: '/shopcar', component: ShopCar },
  { path: '/profile', component: ProFile },
]

export default new Router({
  routes,
  mode: 'history'
})