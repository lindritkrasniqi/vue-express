import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index"),
      name: "index",
      meta: {
        layout: "loggedIn",
        requiresAuth: false,
      },
    },

    {
      path: "/accounts/login",
      component: () => import("@/pages/accounts/login"),
      name: "accounts-login",
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) next({ name: "index" });
        else next();
      },
    },

    {
      path: "/accounts/logout",
      component: () => import("@/pages/accounts/logout"),
      name: "accounts-logout",
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/accounts/reset",
      component: () => import("@/pages/accounts/reset"),
      name: "accounts-reset",
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn || !Object.keys(to.query).length)
          next({ name: "index" });
        else next();
      },
    },

    {
      path: "/accounts/forgot",
      component: () => import("@/pages/accounts/forgot"),
      name: "accounts-forgot",
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) next({ name: "index" });
        else next();
      },
    },

    {
      path: "/accounts/signup",
      component: () => import("@/pages/accounts/signup"),
      name: "accounts-signup",
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) next({ name: "index" });
        else next();
      },
    },

    {
      path: "/*",
      component: () => import("@/layouts/error"),
      name: "error",
      meta: {
        layout: "error",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.auth.loggedIn) {
    next({ name: "accounts-login" });
  } else {
    next();
  }
});

export default router;
