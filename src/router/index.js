import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import PostIndex from "../views/PostIndex.vue";
import PostNew from "../views/PostNew.vue";
import PostShow from "../views/PostShow.vue";
import PostEdit from "../views/PostEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/",
    name: "post-index",
    component: PostIndex,
  },
  {
    path: "/posts/new",
    name: "post-new",
    component: PostNew,
  },
  {
    path: "/posts/:id",
    name: "post-show",
    component: PostShow,
  },
  {
    path: "/posts/:id/edit",
    name: "post-edit",
    component: PostEdit,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
