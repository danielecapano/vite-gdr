import { createRouter, createWebHistory } from "vue-router";
import CharactersIndex from "./pages/characters/Index.vue";
import CharactersShow from "./pages/characters/Show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "characters.index",
      component: CharactersIndex,
    },
    {
      path: '/character/:id',
      props: true,
      name: 'characters.show',
      component: CharactersShow

    }
  ],
});

export { router };
