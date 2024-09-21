import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutMeView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactMeView.vue"),
    },
    {
      path: "/project/:id",
      name: "project-details",
      component: () => import("@/views/ProjectDetailsView.vue"),
      props: true,
    },
    {
      path: "/early-projects",
      name: "early-projects",
      component: () => import("@/views/EarlyProjectsView.vue"),
    },
    {
      path: "/my-resume",
      name: "my-resume",
      component: () => import("@/views/ResumeView.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;
