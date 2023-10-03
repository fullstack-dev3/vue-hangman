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
    path: "/playnow/:category",
    name: "PlayNow",
    component: PlayNow,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;