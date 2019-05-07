import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Price from '@/components/Price'
import News from '@/components/News'
import Contacts from '@/components/Contacts'
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