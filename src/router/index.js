import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import  MovieBooking from "../views/MovieBooking.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path:"/",
      name:"home",
      component:Home
      
  },{
      path:"/movieBooking/:id",
      name:"MovieBooking",
      component:MovieBooking
  }]
})

export default router
