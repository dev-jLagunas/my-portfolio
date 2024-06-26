import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const AboutMeView = () => import("@/views/AboutMeView.vue");
const ContactMeView = () => import("@/views/ContactMeView.vue");
const ProjectDetailsView = () => import("@/views/ProjectDetailsView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutMeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactMeView,
    },
    {
      path: "/project/:id",
      name: "project-details",
      component: ProjectDetailsView,
      props: true,
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;
