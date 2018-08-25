import Vue from 'vue'
import Router from 'vue-router'
import settings from '@/components/settings'
import optionList from '@/components/optionList'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/components/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/components/optionList',
      name: 'optionList',
      component: optionList
    }
  ]
})
