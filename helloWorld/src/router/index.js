import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ], mode: 'history'
})
