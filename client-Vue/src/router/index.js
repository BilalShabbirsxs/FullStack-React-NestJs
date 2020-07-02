import Vue from 'vue'
import VueRouter from 'vue-router'
import ClassList from '../views/ClassList.vue'
import ClassInput from '../views/ClassInput.vue'
import ClassUpdate from '../views/ClassUpdate.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ClassList',
    component: ClassList
  },
  {
    path: '/input',
    name: 'ClassInput',
    component: ClassInput
  },
  {
    path: '/update/:id',
    name: 'ClassUpdate',
    component: ClassUpdate
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
