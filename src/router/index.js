import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import PlayNow from "@/views/PlayNow.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/playnow",
    name: "PlayNow",
    component: PlayNow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;