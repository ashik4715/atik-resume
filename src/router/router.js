import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("@src/components/HelloWorld.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@views/NotFound.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@views/Contact.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@views/Projects.vue"),
  },
  {
    path: "/new-projects",
    name: "new-projects",
    component: () => import("@views/projects.vue"),
  },
  {
    path: "/single-project/:id",
    name: "single-project",
    component: () => import("@views/single-project.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy-policy",
    component: () => import("@views/Privacy-policy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "Terms-conditions",
    component: () => import("@views/Terms-conditions.vue"),
  },
  {
    path: "/FE-tools",
    name: "FE-tools",
    component: () => import("@views/FE-tools.vue"),
  },
  {
    path: "/sprinkler-activation",
    name: "sprinkler-activation",
    component: () => import("@views/sprinkler-activation.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
