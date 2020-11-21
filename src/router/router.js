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
      meta: {layout: "empty"},
      component: LogIn
    },
    {
      path: '/board',
      name: 'board',
      meta: {layout: "main"},
      component: TaskBoard,
      props: true
    }
  ]

})

export default router;