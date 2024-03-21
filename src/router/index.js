import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import Login from "@/components/Login.vue";

const routes = [
	{ path: "/", name: "login", component: Login },
	{ path: "/home", name: "home", component: HomePage },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
