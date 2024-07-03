import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const AboutMeView = () => import("@/views/AboutMeView.vue");
const ContactMeView = () => import("@/views/ContactMeView.vue");
const ProjectDetailsView = () => import("@/views/ProjectDetailsView.vue");
const EarlyProjectsView = () => import("@/views/EarlyProjectsView.vue");
const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/early-projects",
      name: "early-projects",
      component: EarlyProjectsView,
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;
