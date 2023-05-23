import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Page1View from "../views/Page1View.vue"
import ProjectsView from "../views/ProjectsView.vue"
import LegalView from "../views/LegalView.vue"
import BlogView from "../views/BlogView.vue"
import ArticleView from "../views/ArticleView.vue"

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/page1",
    component: Page1View,
  },
  {
    path: "/projects",
    component: ProjectsView,
  },
  {
    path: "/mentions-legales",
    component: LegalView,
  },
  {
    path: "/blog",
    component: BlogView,
  },
  {
    path: "/article",
    component: ArticleView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
