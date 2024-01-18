import { createRouter, createWebHistory } from "vue-router";
import CharactersIndex from "./pages/characters/Index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "characters.index",
      component: CharactersIndex,
    },
  ],
});

export { router };
