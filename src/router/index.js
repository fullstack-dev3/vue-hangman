import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import PlayNow from "@/views/PlayNow.vue";
import PlayWords from "@/views/PlayWords.vue";

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
  {
    path: "/playnow/:category",
    name: "PlayWords",
    component: PlayWords,
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