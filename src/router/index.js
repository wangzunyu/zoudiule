import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pasea/home/home'
import City from '@/pasea/city/city'
import Detail from '@/pasea/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
