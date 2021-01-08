import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../components/pages/main.page.vue";
import Page_404 from "../components/pages/404.page.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Main },
	{ path: "*", component: Page_404 },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
