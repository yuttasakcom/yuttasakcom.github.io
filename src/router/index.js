import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Employees/Dashboard'
import NewEmployee from '@/components/Employees/NewEmployee'
import ViewEmployee from '@/components/Employees/ViewEmployee'
import EditEmployee from '@/components/Employees/EditEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/employee/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/employee/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/employee/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    }
  ]
})
