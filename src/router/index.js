import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Price from '@/pages/Price'
import News from '@/pages/News'
import Contacts from '@/pages/Contacts'
import Registration from '@/components/Registration'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/price',
      name: 'price',
      component: Price
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/reg',
      name: 'reg',
      component: Registration
    }
  ]
})