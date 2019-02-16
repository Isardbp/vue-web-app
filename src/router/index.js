import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import BienesRaices from '@/components/BienesRaices/BienesRaices'
import ProyectosPropios from '@/components/ProyectosPropios/ProyectosPropios'
import Startups from '@/components/Startups/Startups'
import CreateProject from '@/components/ProyectosPropios/CreateProject'
import Project from '@/components/ProyectosPropios/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/bienes_raices',
      name: 'BienesRaices',
      component: BienesRaices
    },
    {
      path: '/proyectospropios',
      name: 'ProyectosPropios',
      component: ProyectosPropios
    },
    {
      path: '/proyectospropios/new',
      name: 'CreateProject',
      component: CreateProject
    },
    {
      path: '/proyectospropios/:id',
      name: 'Project',
      component: Project
    },
    {
      path: '/startups',
      name: 'Startups',
      component: Startups
    }
  ],
  mode: 'history'
})
