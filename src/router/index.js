import Vue from "vue";
import Router from "vue-router";

const Home = resolve => require(["@/views/Home.vue"], resolve);
const About = resolve => require(["@/views/About.vue"], resolve);

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
