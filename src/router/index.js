import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: () => import("../views/gameview/GameView.vue"),
    },
    {
      path:"/test",
      name:"test",
      component:()=>import("../views/testview/TestView.vue")
    }
  ],
});

router.beforeEach((to, from, next) => {
    next()
});

export default router;
