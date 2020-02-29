import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/earrings',
    name: 'earrings',
    component: () => import('../components/Earrings.vue')
},

{
  path: '/createone',
  name: 'createone',
  component: () => import('../components/CreateOne.vue')
},
{
  path: '/createstock',
  name: 'createstock',
  component: () => import('../components/CreateStock.vue')
},

{
  path: '/itemview',
  name: 'itemview',
  component: () => import('../components/ItemView.vue')
},

{
  path: '/itemview/:id',
  name: 'itemviewid',
  props: true,
  component: () => import('../components/SingleItem.vue')

},{
  path: '/checkout/:id',
  name: 'checkout',
  props: true,
  component: () => import('../components/CheckOut.vue')

},
{
  path: '/checkout1/:id',
  name: 'checkout1',
  props: true,
  component: () => import('../components/CheckOut1.vue')

},
{
  path: '/showorders',
  name: 'showorders',
  component: () => import('../components/ShowOrders.vue')
},
{
  path: '/dangles',
  name: 'dangles',
  component: () => import('../components/Dangles.vue')
},
{
  path: '/necklaces',
  name: 'necklaces',
  component: () => import('../components/Ckles.vue')
},
{
  path: '/pattern',
  name: 'pattern',
  component: () => import('../components/Pattern.vue')
},
{
  path: '/solid',
  name: 'solid',
  component: () => import('../components/Solid.vue')
},
{
  path: '/brcelets',
  name: 'bracelets',
  component: () => import('../components/Clets.vue')
},
{
  path: '/studs',
  name: 'studs',
  component: () => import('../components/Stud.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
