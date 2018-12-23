import Vue from 'vue'
import Router from 'vue-router'
import AllList from '@/components/allList/allList'
import ActiveList from '@/components/activeList/activeList'
import CompletedList from '@/components/completedList/completedList'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/',
      redirect: '/all'
    },
    {
      path: '/all',
      name: 'all',
      component: AllList
    },
    {
      path: '/active',
      name: 'active',
      component: ActiveList
    },
    {
      path: '/completed',
      name: 'completed',
      component: CompletedList
    }
  ]
})
