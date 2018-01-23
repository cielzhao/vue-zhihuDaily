import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ThemesView from '@/components/ThemesView'
import Detail from '@/components/Detail'
import Editors from '@/components/Editors'
import Comments from '@/components/Comments'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ThemesView',
      name: 'ThemesView',
      component: ThemesView
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/editors',
      name: 'editors',
      component: Editors
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
