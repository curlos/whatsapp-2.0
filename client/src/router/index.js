import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const routes = [
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;