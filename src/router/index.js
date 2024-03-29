import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import Login from "@/components/Login.vue";
import ExpenseForm from "@/components/ExpenseForm.vue";
import HomeLayout from "@/components/HomeLayout.vue";

const routes = [
	{ path: "/", name: "login", component: Login },
	{
		path: "/home",
		component: HomeLayout,
		children: [
			{ path: "", name: "home", component: HomePage },
			{ path: "expenses-form", name: "expenses-form", component: ExpenseForm },
		],
	},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
