import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Page1View from "../views/Page1View.vue"

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/page1",
    component: Page1View,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
