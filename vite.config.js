import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "https://5574610.extforms.netsuite.com",
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
