import { createWebHistory, createRouter } from "vue-router";

const routes = [
{
    path: "/",
    alias: "/home",
    name: "home",
    component:()=>import("./components/v-main-home")
},
{
    path: "/category",
    name: "category",
    component:()=>import("./components/AddTime")
},
{
    path: "/login",
    name: "login",
    component:()=>import("./components/v-main-login")
},
{
    path: "/registration",
    name: "registration",
    component:()=>import("./components/v-main-registration")
},
{
    path: '/report',
    name: 'report',
    component:()=>import("./views/ReportList")
  },
  {
    path: '/users',
    name: 'users',
    component:()=>import("./views/UsersList")
  }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;