import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";

import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import JobDetails from "@/pages/JobDetails.vue";
import useUserStore from "@/stores/UserStore";
import ForgotPassword from "@/pages/ForgotPassword.vue";
import ResetPassword from "@/pages/ResetPassword.vue";
import UserProfile from "@/pages/UserProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView,
      meta:{requiresAuth:true}
    },
    {
      name: "Login",
      path: "/Login",
      component: Login,
      meta:{ requiresGuest:true }
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/job/:id",
      component: JobDetails,
      meta: { requiresAuth: true },
    },
    {
      path: "/job/:id",
      component: JobDetails,
      meta: { requiresAuth: true },
    },
    {
      path:"/forgotPassword",
      component: ForgotPassword,
      meta:{ requiresGuest:true }
    },
    {
      path:"/password/reset/:token",
      component: ResetPassword,
      meta:{ requiresGuest:true }
    },
    {
      path: "/myProfile",
      component: UserProfile,
      meta: { requiresAuth: true },
    },
  ],
});
router.beforeEach(async(to, from, next) => {
  const useStore = useUserStore();
  //  // Ensure user details are fetched
  //  if (!useStore.user && !useStore.isLoading) {
  //   await useStore.getUserDetails(); // Fetch user details if not already available
  // }
  
  if (to.meta.requiresAuth && !useStore.isAuthenticated) {
    next({ name: "Login" });

  }else if( to.meta.requiresGuest && useStore.isAuthenticated)
   {
      next({ name: "Home" })

  } else {
    next();
  }
});

export default router;
