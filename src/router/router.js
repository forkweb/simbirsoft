import Vue from 'vue'
import Router from 'vue-router'

import LogIn from '../components/LogIn'
import TaskBoard from '../components/TaskBoard'
Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn
    },
    {
      path: '/board',
      name: 'board',
      component: TaskBoard
    }
  ]


})

export default router;