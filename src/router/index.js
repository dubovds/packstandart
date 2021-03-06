import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Price from '@/pages/Price'
import News from '@/pages/News'
import Profile from '@/pages/Profile'
import Contacts from '@/pages/Contacts'
import Registration from '@/pages/auth/Registration'
import Login from '@/pages/auth/Login'
// import profile from '@/pages/Profile'
import checkout from '@/pages/profile/checkout'
import myCompanies from '@/pages/profile/my-companies'
import addCompanies from '@/pages/profile/add-companies'
import editCompany from '@/pages/profile/edit-company'
import orederDetails from '@/pages/profile/order-details'
import orderHistory from '@/pages/profile/order-history'
import editProfile from '@/pages/profile/edit-profile'
import card from '@/pages/profile/card'
import archive from '@/pages/profile/archive'
import catalog from '@/pages/profile/catalog'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [{
          path: 'checkout',
          name: 'checkout',
          component: checkout
        },
        {
          path: 'companies',
          name: 'companies',
          component: myCompanies
        },
        {
          path: 'add-companies',
          name: 'addCompanies',
          component: addCompanies
        },
        {
          path: 'edit-company/:id',
          name: 'editCompany',
          component: editCompany
        },
        {
          path: 'order-details/:id',
          name: 'orederDetails',
          component: orederDetails
        },
        {
          path: 'edit-profile',
          name: 'editProfile',
          component: editProfile
        },
        {
          path: 'order-history',
          name: 'orderHistory',
          component: orderHistory
        },
        {
          path: 'catalog',
          name: 'catalog',
          component: catalog
        },
        {
          path: 'card',
          name: 'card',
          component: card
        },
        {
          path: 'archive',
          name: 'archive',
          component: archive
        }
      ]
    }
  ]
})