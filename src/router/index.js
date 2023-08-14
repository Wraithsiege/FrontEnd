import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GiftCardsView from '@/views/GiftCardsView.vue'
import CongratulationsCardsView from '@/views/CongratulationsCardsView.vue'
import BooksView from '@/views/BooksView.vue'
import MoviesView from '@/views/MoviesView.vue'
import MusicView from '@/views/MusicView.vue'
import Toys from '@/views/Toys.vue'
import SchoolAccessories from '@/views/SchoolAccessories.vue'
import WritingAccessories from '@/views/WritingAccessories.vue'
import Users from '@/views/Users.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Guestbook from '@/views/Guestbook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/giftCards',
    name: 'GiftCards',
    component: GiftCardsView
  },
  {
    path: '/congratulationsCards',
    name: 'CongratulationsCards',
    component: CongratulationsCardsView
  },
  {
    path: '/books',
    name: 'Books',
    component: BooksView
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesView
  },
  {
    path: '/music',
    name: 'Music',
    component: MusicView
  },
  {
    path: '/toys',
    name: 'Toys',
    component: Toys
  },
  {
    path: '/schoolAccessories',
    name: 'SchoolAccessories',
    component: SchoolAccessories
  },
  {
    path: '/writingAccessories',
    name: 'WritingAccessories',
    component: WritingAccessories
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/guestbook',
    name: 'Guestbook',
    component: Guestbook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
