import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import Svgr from "vite-plugin-svgr";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);
// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer(),
		Svgr({
			include: "**/*.svg",
		}),
	],
	build: {
		outDir: "./dist",
		emptyOutDir: true,
		rollupOptions: {},
	},
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "./src/app"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@widgets": path.resolve(__dirname, "./src/widgets"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@entities": path.resolve(__dirname, "./src/entities"),
			"@shared": path.resolve(__dirname, "./src/shared"),
		},
	},
});
