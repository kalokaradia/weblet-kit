import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/weblet-kit.ts"),
			name: "WebletKit",
			// Format defaultnya: 'es' dan 'umd'
			formats: ["es", "umd"],
			fileName: (format) => {
				if (format === "umd") return "weblet-kit.min.js"; // file utama stabil
				return `weblet-kit.${format}.js`; // file format lain tetap ada
			},
		},
		rollupOptions: {
			external: [],
		},
	},
});
